import type {NextPage} from 'next';
import styles from './home.module.scss';

import Header from './header/header';
import CoreAspects from './core-aspects/core-aspects';
import Abstracts from './abstracts/abstracts';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header></Header>
      </div>
      <div className={styles.coreAspects}>
        <CoreAspects></CoreAspects>
      </div>
      <div className={styles.abstracts}>
        <Abstracts></Abstracts>
      </div>
    </div>
  );
};

export default Home;
