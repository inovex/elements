import type { NextPage } from 'next';
import styles from './home.module.scss';

import Header from '../../components/home/header/header';
import CoreAspects from '../../components/home/core-aspects/core-aspects';
import { SubRoutes } from '../../utils/routes';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <section id={SubRoutes.HOME_INFO}>
        <Header></Header>
      </section>
      <section id={SubRoutes.HOME_CORE_ASPECTS}>
        <CoreAspects></CoreAspects>
      </section>
    </div>
  );
};

export default Home;
