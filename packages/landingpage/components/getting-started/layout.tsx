import { InoSegmentButton, InoSegmentGroup } from '@elements';
import Page from 'components/layout/page';
import { useRouter } from 'next/router';
import { Supported_Locales } from 'translations/config';
import { Framework, NameByFramework } from 'utils/frameworks';
import { MainRoutes } from 'utils/routes';
import styles from './layout.module.scss';
import NavigationMenu from './navigationMenu';

interface Props {
  children: React.ReactNode;
  sandboxUrl: string;
  framework: Framework;
}

const Layout = ({ children, framework, sandboxUrl }: Props) => {
  const { push } = useRouter();
  const frameworkName = NameByFramework[framework];

  return (
    <Page title={['Getting Started', frameworkName]}>
      <div className={styles.segmentGroup}>
        <InoSegmentGroup
          id="segment-grp"
          value={framework}
          onValueChange={(value) =>
            push(
              `/${Supported_Locales.EN}${MainRoutes.GETTING_STARTED}/${value.detail}`
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
        </div>
      </div>
    </Page>
  );
};

export default Layout;
