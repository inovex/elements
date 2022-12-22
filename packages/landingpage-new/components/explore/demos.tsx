import styles from './demos.module.scss';
import {InoTab, InoTabBar} from '@elements';
import {useState} from 'react';
function Demos() {
  const [activeTab, setActiveTab] = useState(0);

  return (<>
    <h1 className={styles.header}>
      <b>demo</b> projects
    </h1>
    <InoTabBar className={styles.tabBar} activeTab={activeTab} onActiveTabChange={(e: any) => setActiveTab(e.detail)}>
      <InoTab className={styles.tab} label="Angular"></InoTab>
      <InoTab className={styles.tab} label="React"></InoTab>
      <InoTab className={styles.tab} label="Vue"></InoTab>
    </InoTabBar>
    <div>{activeTab === 0 ? 'Angular' : activeTab === 1 ? 'React' : 'Vue'}</div>
  </>);
};

export default Demos;
