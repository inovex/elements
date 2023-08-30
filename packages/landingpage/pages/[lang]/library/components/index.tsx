import openInNew from '@assets/open-in-new.svg';
import { InoButton, InoIcon, InoSpinner } from '@elements';
import { merge } from 'lodash';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useContext, useEffect, useMemo } from 'react';
import Page from '../../../../components/layout/page';
import { Locale_File } from '../../../../translations/types';
import { LangContext } from '../../../../types/langContext';
import { UiContext, UiContextType } from '../../../../utils/context/UiContext';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from '../../../../utils/context/staticPaths';
import { useStorybookUrl } from '../../../../utils/hooks/useStorybookUrl';
import { useStorybookUrlSyncer } from '../../../../utils/hooks/useStorybookUrlSyncer';
import useTranslation from '../../../../utils/hooks/useTranslation';
import styles from './index.module.scss';

const StoryBookPage: NextPage<void> = () => {
  const { t } = useTranslation();
  const { hideFooter } = useContext(UiContext) as UiContextType;

  const { initialUrl, fromLandingpageToStorybookUrl } = useStorybookUrl();
  const currentStory = useStorybookUrlSyncer();
  const url = useMemo(
    () => (currentStory ? fromLandingpageToStorybookUrl(currentStory) : null),
    [currentStory]
  );

  // prevent scrolling of body while in storybook
  useEffect(() => {
    document.body.style.overflow = 'clip';
    hideFooter(true);

    return () => {
      document.body.style.overflow = 'initial';
      hideFooter(false);
    };
  }, []);

  return (
    <Page title={[t('common.meta.library')]}>
      <div className={styles.container}>
        {url && (
          <a
            className={styles.openExternallyButton}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <InoButton>
              <InoIcon
                className={styles.openExternallyButtonIcon}
                icon={openInNew}
                slot="icon-leading"
              ></InoIcon>
              Open storybook in new tab
            </InoButton>
          </a>
        )}
        {!initialUrl && <InoSpinner type="circle"></InoSpinner>}
        {initialUrl && (
          <iframe
            src={initialUrl}
            style={{
              position: 'absolute',
              left: 0,
              top: 120,
              height: 'calc(100vh - 120px)', // 120px = Navbar height
              width: '100%',
              border: 'none',
            }}
          ></iframe>
        )}
      </div>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) =>
  getStaticLanguageProps(ctx as LangContext, Locale_File.LIBRARY);

export const getStaticPaths: GetStaticPaths = async () => {
  const languagePaths = getStaticLanguagePaths().paths;
  const elementPaths = languagePaths.map(() => ({ params: { element: '' } }));
  const langXElementPaths = languagePaths.map((path, index) =>
    merge(path, elementPaths[index])
  );

  return {
    paths: langXElementPaths,
    fallback: true,
  };
};

export default StoryBookPage;
