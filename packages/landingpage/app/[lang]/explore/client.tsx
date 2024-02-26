'use client';

import ExploreHeader from './components/explore-header';
import { SubRoutes } from '../../../utils/routes';
import Examples from './components/examples';
import Demos from './components/demos';
import ResourceCard from './components/resources/resources-card';
import classNames from 'classnames';
import styles from './client.module.scss';

export const ExplorePage = () => {
  return (
    <div className={classNames('section-container', styles.exploreContainer)}>
      <ExploreHeader />
      <section id={SubRoutes.EXPLORE_EXAMPLES}>
        <Examples />
      </section>
      <section id={SubRoutes.EXPLORE_DEMOS}>
        <Demos />
      </section>
      <section id={SubRoutes.EXPLORE_RESSOURCES}>
        <ResourceCard />
      </section>
    </div>
  );
};
