import { InoButton, InoSegmentButton, InoSegmentGroup } from '@elements';
import { InoNavMenu } from '@inovex.de/elements-react';
import Page from 'components/layout/page';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Supported_Locales } from 'translations/config';
import { Framework, NameByFramework } from 'utils/frameworks';
import { MainRoutes } from 'utils/routes';
import styles from './layout.module.scss';

interface Props {
  children: React.ReactNode;
  sandboxUrl: string;
  framework: Framework;
}

const SANDBOX_MAP: { [key in Framework]?: string } = {
  [Framework.REACT]: '/codesandbox-react.png',
  [Framework.ANGULAR]: '/codesandbox-angular.png',
  [Framework.VUE]: '/codesandbox-vue.png',
};

const Layout = ({ children, framework, sandboxUrl }: Props) => {
  const { push } = useRouter();
  const frameworkName = NameByFramework[framework];

  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <Page title={['Getting Started', frameworkName]}>
      <div className={styles.segmentGroup}>
        <InoSegmentGroup
          id="segment-grp"
          value={framework}
          onValueChange={(value) =>
            push(
              `/${Supported_Locales.EN}${MainRoutes.GETTING_STARTED}/${value.detail}`,
            )
          }
        >
          {Object.values(Framework).map((framework) => (
            <InoSegmentButton key={framework} value={framework}>
              {NameByFramework[framework]}
            </InoSegmentButton>
          ))}
        </InoSegmentGroup>
      </div>
      <div className={styles.container}>
        <article id="guide-sections">{children}</article>
        <aside>
          <InoNavMenu
            menuTitle={(frameworkName + ' guide').toUpperCase()}
            activeSection={activeSection}
            onActiveSectionChanged={(e) => setActiveSection(e.detail)}
            sectionsContainerId='guide-sections'
          />
        </aside>
        <div className={styles.sandbox}>
          <h2>Looking for more resources?</h2>
          <p className="title-s">
            Make sure to check out the <a href={sandboxUrl}>example projects</a>
          </p>
          {SANDBOX_MAP[framework] && (
            <a
              href={sandboxUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={'Open Sandbox for' + ` ${frameworkName}`}
              className={styles.sandboxImageContainer}
            >
              <Image
                src={SANDBOX_MAP[framework] || ''}
                alt={'Sandbox for' + ` ${frameworkName}`}
                width={0}
                height={0}
                sizes="100vw"
                className={styles.sandboxImage}
              />
              <InoButton
                variant="filled"
                type="button"
                aria-hidden="true"
                className={styles.overlayButton}
              >
                {'Go to the' + ` ${frameworkName}` + ' Sandbox'}
              </InoButton>
            </a>
          )}
        </div>
      </div>
    </Page>
  );
};

export default Layout;
