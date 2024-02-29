import { InoSegmentButton, InoSegmentGroup, InoButton } from '@elements';
import Page from 'components/layout/page';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Supported_Locales } from 'translations/config';
import { Framework, NameByFramework } from 'utils/frameworks';
import { MainRoutes } from 'utils/routes';
import styles from './layout.module.scss';
import NavigationMenu from './navigationMenu';
import { useEffect, useState } from 'react';
import { scrollToElement } from 'utils/scrollToElement';

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
  const router = useRouter();
  const frameworkName = NameByFramework[framework];

  useEffect(() => {
    const handlePageLoad = () => {
      if (router.asPath.includes('#')) {
        const hash = window.location.hash.substring(1);
        scrollToElement(hash);
      }
    };

    window.addEventListener('load', handlePageLoad);
    return () => window.removeEventListener('load', handlePageLoad);
  }, [router.asPath]);

  return (
    <Page title={['Getting Started', frameworkName]}>
      <div className={styles.segmentGroup}>
        <InoSegmentGroup
          id="segment-grp"
          value={framework}
          onValueChange={(value) =>
            router.push(
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
        <article>{children}</article>
        <NavigationMenu title={frameworkName.toUpperCase() + ' GUIDE'} />
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
