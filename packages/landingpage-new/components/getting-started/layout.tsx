import { InoSegmentButton, InoSegmentGroup } from '@elements';
import Page from 'components/layout/page';
import { useRouter } from 'next/router';
import { Framework, NameByFramework } from 'utils/frameworks';
import useTranslation from 'utils/hooks/useTranslation';
import { MainRoutes } from 'utils/routes';
import styles from './layout.module.scss';

interface Props {
  children: React.ReactNode;
  sandboxUrl: string;
  framework: Framework;
}

const GettingStarted = ({ children, framework, sandboxUrl }: Props) => {
  const { push } = useRouter();
  const frameworkName = NameByFramework[framework];
  const { t, locale } = useTranslation();

  return (
    <Page title={[t('common.meta.getting_started'), frameworkName]}>
      <div className={styles.segmentGroup}>
        <InoSegmentGroup
          id='segment-grp'
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
        {children}
        <div className={styles.sandbox}>
          <h1>{t('sandbox.title')}</h1>
          <p className='title-s'>{t('sandbox.description')}</p>
          <iframe src={sandboxUrl} className={styles.sandbox}></iframe>
        </div>
      </div>
    </Page>
  );
};

export default GettingStarted;
