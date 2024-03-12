'use client';

import { SubRoutes } from '@routes';
import { Demos, Examples, ExploreHeader, ResourceCard } from './_components';
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
