import styles from './getting-started.module.scss';
import ReactGuide from 'components/learn/react-guide.mdx';
import AngularGuide from 'components/learn/angular-guide.mdx';
import VueGuide from 'components/learn/vue-guide.mdx';
import JsGuide from 'components/learn/javascript-guide.mdx';
import Page from 'components/layout/page';
import { InoSegmentButton, InoSegmentGroup } from '@elements';
import { FC, useState } from 'react';

enum Frameworks {
  JS = 'JS',
  REACT = 'REACT',
  ANGULAR = 'ANGULAR',
  VUE = 'VUE',
}

const GuideByFramework: Record<Frameworks, FC> = {
  [Frameworks.ANGULAR]: AngularGuide,
  [Frameworks.REACT]: ReactGuide,
  [Frameworks.VUE]: VueGuide,
  [Frameworks.JS]: JsGuide,
};

const SandboxUrlByFramework: Record<Frameworks, string> = {
  [Frameworks.ANGULAR]: 'https://codesandbox.io/s/github/inovex/elements-example-angular',
  [Frameworks.REACT]: 'https://codesandbox.io/embed/github/inovex/elements-example-react/tree/master/?fontsize=14&hidenavigation=1&theme=dark',
  [Frameworks.VUE]: '',
  [Frameworks.JS]: '',
}

const GettingStarted = () => {
  const [framework, setFramework] = useState<Frameworks>(Frameworks.ANGULAR);

  const Guide = GuideByFramework[framework];

  return (
    <Page title="Getting Started">
      <div className={styles.segmentGroup}>
        <InoSegmentGroup
          id="segment-grp"
          value={framework}
          onValueChange={(value) => setFramework(value.detail)}
        >
          <InoSegmentButton value={Frameworks.ANGULAR}>
            Angular
          </InoSegmentButton>
          <InoSegmentButton value={Frameworks.REACT}>React</InoSegmentButton>
          <InoSegmentButton value={Frameworks.VUE}>Vue</InoSegmentButton>
          <InoSegmentButton value={Frameworks.JS}>Javascript</InoSegmentButton>
        </InoSegmentGroup>
      </div>
      <div className={styles.container}>
        <Guide />
        <h1>
          Looking for more resources? Make sure to check out the example
          projects:
        </h1>
        <iframe
          src={SandboxUrlByFramework[framework]}
          className={styles.sandbox}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </Page>
  );
};

export default GettingStarted;
