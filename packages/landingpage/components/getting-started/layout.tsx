import { InoSegmentButton, InoSegmentGroup, InoButton } from '@elements';
import Page from 'components/layout/page';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Framework, NameByFramework } from 'utils/frameworks';
import useTranslation from 'utils/hooks/useTranslation';
import { MainRoutes } from 'utils/routes';
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
  const { t, locale } = useTranslation();

  function handleImageClick() {
    window.open(sandboxUrl, '_blank');
  }

  return (
    <Page title={[t('common.meta.getting_started'), frameworkName]}>
      <div className={styles.segmentGroup}>
        <InoSegmentGroup
          id="segment-grp"
          value={framework}
          onValueChange={(value) =>
            push(`/${locale}${MainRoutes.GETTING_STARTED}/${value.detail}`)
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
        {SANDBOX_MAP[framework] && (
          <div className={styles.sandbox}>
            <h1>{t('sandbox.title')}</h1>
            <p className="title-s">{t('sandbox.description')}</p>

            <div
              className={styles.sandboxImageContainer}
              onClick={handleImageClick}
              role="button"
              tabIndex={0}
              aria-label={`Open CodeSandbox for ${frameworkName}`}
            >
              <Image
                src={SANDBOX_MAP[framework] || ''}
                alt={`CodeSandbox for ${frameworkName}`}
                width={0}
                height={0}
                sizes="100vw"
                className={styles.sandboxImage}
              />
              <InoButton
                variant="filled"
                type="button"
                className={styles.overlayButton}
              >
                {t('sandbox.goto')}
              </InoButton>
            </div>
          </div>
        )}
      </div>
    </Page>
  );
};

export default Layout;
