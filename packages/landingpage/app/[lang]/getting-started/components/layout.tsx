import {
  InoButton,
  InoSegmentButton,
  InoSegmentGroup,
} from '@inovex.de/elements-react';
import Image from 'next/image';
import { i18n } from '../../../../i18n-config';
import { useRouter } from 'next/navigation';
import { Framework, NameByFramework } from '../../../../utils/frameworks';
import { MainRoutes } from '../../../../utils/routes';
import styles from './layout.module.scss';
import NavigationMenu from './navigationMenu';

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

  return (
    <div className={styles['mdx-content']}>
      <div className={styles.segmentGroup}>
        <InoSegmentGroup
          id="segment-grp"
          value={framework}
          onValueChange={(value) =>
            push(
              `/${i18n.defaultLocale}${MainRoutes.GETTING_STARTED}/${value.detail}`,
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
              aria-label={`Open Sandbox for ${frameworkName}`}
              className={styles.sandboxImageContainer}
            >
              <Image
                src={SANDBOX_MAP[framework] || ''}
                alt={`Sandbox for ${frameworkName}`}
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
                {`Go to the ${frameworkName} Sandbox`}
              </InoButton>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
