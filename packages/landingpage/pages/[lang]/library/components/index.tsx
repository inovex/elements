import { useStorybookUrl } from '../../../../utils/hooks/useStorybookUrl';
import {
  InoSelect,
  InoOption,
  InoButton,
  InoIcon,
  InoSpinner,
} from '@elements';
import styles from './index.module.scss';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from '../../../../utils/context/staticPaths';
import { LangContext } from '../../../../types/langContext';
import { Locale_File } from '../../../../translations/types';
import { merge } from 'lodash';
import { useStorybookUrlSyncer } from '../../../../utils/hooks/useStorybookUrlSyncer';
import openInNew from '@assets/open-in-new.svg';
import { useContext, useEffect, useState, useMemo } from 'react';
import { UiContext, UiContextType } from '../../../../utils/context/UiContext';
import Page from '../../../../components/layout/page';
import useTranslation from '../../../../utils/hooks/useTranslation';

const StoryBookPage: NextPage<void> = () => {
  const { t } = useTranslation();
  const { hideFooter } = useContext(UiContext) as UiContextType;
  const [versions, setVersions] = useState<string[]>([]);
  const [selectedVersion, setSelectedVersion] = useState('');

  const { initialUrl, fromLandingpageToStorybookUrl } = useStorybookUrl();
  const currentStory = useStorybookUrlSyncer();
  const url = useMemo(
    () => (currentStory ? fromLandingpageToStorybookUrl(currentStory) : null),
    [currentStory]
  );

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/inovex/elements/pages/hosted-versions.json'
    )
      .then((response) => response.json())
      .then((data) => setVersions(data));

    // prevent scrolling of body while in storybook
    document.body.style.overflow = 'clip';
    hideFooter(true);

    return () => {
      document.body.style.overflow = 'initial';
      hideFooter(false);
    };
  }, []);

  const handleVersionChange = (e: CustomEvent) => {
    setSelectedVersion(e.detail);
  };

  const iframeUrl = selectedVersion
    ? `https://elements.inovex.de/version/${selectedVersion}/?path=/story/docs-welcome--page`
    : initialUrl;

  return (
    <Page title={[t('common.meta.library')]}>
      <div className={styles.container}>
        <InoButton className={styles.openExternallySelect} variant='outlined'>
          <InoIcon slot="icon-leading" icon="status_future"></InoIcon>
          <InoSelect
            name="select-version"
            value={selectedVersion}
            onValueChange={handleVersionChange}
            label='Select version'
          >
            {versions.map((version, i) => (
              <InoOption key={i} value={version}>
                {version}
              </InoOption>
            ))}
          </InoSelect>
        </InoButton>

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
        {iframeUrl && (
          <iframe
            src={iframeUrl}
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
