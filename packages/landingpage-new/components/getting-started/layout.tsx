import styles from './layout.module.scss';
import Page from 'components/layout/page';
import { InoSegmentButton, InoSegmentGroup } from '@elements';
import { useRouter } from 'next/router';
import { NameByFramework, Framework } from '../../utils/frameworks';

interface Props {
  children: React.ReactNode;
  sandboxUrl: string;
  framework: Framework;
}

const GettingStarted = ({ children, framework, sandboxUrl }: Props) => {
  const { push } = useRouter();
  const frameworkName = NameByFramework[framework];

  return (
    <Page title={['Getting Started', frameworkName]}>
      <div className={styles.segmentGroup}>
        <InoSegmentGroup
          id="segment-grp"
          value={framework}
          onValueChange={(value) => push(value.detail)}
        >
          {Object.values(Framework).map((framework) => (
            <InoSegmentButton key={framework} value={framework}>
              {NameByFramework[framework]}
            </InoSegmentButton>
          ))}
        </InoSegmentGroup>
      </div>
      <div className={styles.container}>
        {children}
        <h1>Looking for more resources?</h1>
        <p className="title-s">Make sure to check out the example projects</p>
        <iframe src={sandboxUrl} className={styles.sandbox}></iframe>
      </div>
    </Page>
  );
};

export default GettingStarted;
