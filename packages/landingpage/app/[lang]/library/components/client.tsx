'use client';

import openInNew from '@assets/open-in-new.svg';
import { InoButton, InoIcon, InoSpinner } from '@inovex.de/elements-react';
import { useContext, useEffect } from 'react';
import { UiContext, UiContextType } from '../../../../utils/context/UiContext';
import { useStorybookUrl } from '../../../../utils/hooks/useStorybookUrl';
import { useStorybookUrlSyncer } from '../../../../utils/hooks/useStorybookUrlSyncer';
import styles from './client.module.scss';

export const StoryBookPage = () => {
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
  );
};
