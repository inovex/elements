import styles from './demos.module.scss';
import { InoButton, InoSpinner, InoTab, InoTabBar } from '@elements';
import { useEffect, useReducer, useState } from 'react';

type iFrameState = {
  show?: boolean;
  loading?: boolean;
};

function iframeReducer(state: iFrameState, newState: iFrameState) {
  return { ...state, ...newState };
}
function Demos() {
  const [activeTab, setActiveTab] = useState(0);
  const [iFrameState, setiFrameState] = useReducer(iframeReducer, {
    show: false,
    loading: false,
  } as iFrameState);

  useEffect(() => {
    setiFrameState({ show: false, loading: false });
  }, [activeTab]);

  const activeTabToFramework = () => {
    switch (activeTab) {
      default:
      case 0:
        return 'Angular';
      case 1:
        return 'React';
      case 2:
        return 'Vue';
    }
  };

  const handleButtonClick = () => {
    setiFrameState({ show: !iFrameState.show, loading: true });
  };

  return (
    <>
      <h1 className={styles.header}>
        <b>demo</b> projects
      </h1>
      <InoTabBar
        className={styles.tabBar}
        activeTab={activeTab}
        onActiveTabChange={(e: any) => setActiveTab(e.detail)}
      >
        <InoTab className={styles.tab} label="Angular"></InoTab>
        <InoTab className={styles.tab} label="React"></InoTab>
        <InoTab className={styles.tab} label="Vue"></InoTab>
      </InoTabBar>
      <div className={styles.previewContainer}>
        {iFrameState.show ? (
          <>
            {iFrameState.loading && (
              <InoSpinner className={styles.spinner} type="circle" />
            )}
            <iframe
              onLoad={() => setiFrameState({ loading: false })}
              src={`https://codesandbox.io/embed/github/inovex/elements-example-${activeTabToFramework().toLowerCase()}/tree/master?fontsize=14&hidenavigation=1&theme=dark`}
              style={{
                width: '100%',
                height: '700px',
                border: '0',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </>
        ) : (
          <InoButton onClick={handleButtonClick}>
            <span>Load {activeTabToFramework()} Demo Project</span>
          </InoButton>
        )}
      </div>
    </>
  );
}

export default Demos;
