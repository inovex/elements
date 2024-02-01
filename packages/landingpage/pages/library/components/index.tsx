import openInNew from '@assets/open-in-new.svg';
import { InoButton, InoIcon, InoSpinner } from '@elements';
import { NextPage } from 'next';
import { useContext, useEffect } from 'react';
import Page from '../../../components/layout/page';
import { UiContext, UiContextType } from '../../../utils/context/UiContext';
import { useStorybookUrl } from '../../../utils/hooks/useStorybookUrl';
import useTranslation from '../../../utils/hooks/useTranslation';
import styles from './index.module.scss';
import { useStorybookUrlSyncer } from '../../../utils/hooks/useStorybookUrlSyncer';

const StoryBookPage: NextPage<void> = () => {
  const { t } = useTranslation();
  const { hideFooter } = useContext(UiContext) as UiContextType;

  useStorybookUrlSyncer();
  const storybookUrl = useStorybookUrl();

  useEffect(() => {
    // prevent scrolling of body while in storybook
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
        {storybookUrl && (
          <a
            className={styles.openExternallyButton}
            href={storybookUrl}
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
        {!storybookUrl && <InoSpinner type="circle"></InoSpinner>}
        {storybookUrl && (
          <iframe
            src={storybookUrl}
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

export default StoryBookPage;
