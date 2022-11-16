import type { NextPage } from 'next';
import styles from './home.module.scss';

import Header from './header/header';
import CoreAspects from './core-aspects/core-aspects';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <Header></Header>
      </div>
      <div>
        <CoreAspects></CoreAspects>
      </div>
    </div>
  );
};

export default Home;
