'use client';

import { useEffect } from 'react';
import { SubRoutes } from 'utils/routes';
import { GithubCommitsPerMonth } from 'types/github';
import { NextPage } from 'next';
import { ElementsContributor } from '../../../types/contributors';
import { Activity, Contributors, History } from './components';
import {
  applyPolyfills,
  defineCustomElements,
} from '@inovex.de/elements/dist/loader';

interface Params {
  users: ElementsContributor[];
  commitsPerMonth: GithubCommitsPerMonth;
}

export const AboutPage: NextPage<Params> = ({
  users = [],
  commitsPerMonth = {},
}) => {
  useEffect(() => {
    void applyPolyfills().then(() => {
      void defineCustomElements(window);
    });
  }, []);

  return (
    <div className="section-container">
      <section id={SubRoutes.ABOUT_TEAM}>
        <Contributors users={users} />
      </section>
      <section id={SubRoutes.ABOUT_HISTORY}>
        <History />
      </section>
      <section id={SubRoutes.ABOUT_ACTIVITY}>
        <Activity commitsPerMonth={commitsPerMonth} />
      </section>
    </div>
  );
};
