'use client';

import { SubRoutes } from '@routes';
import { GithubCommitsPerMonth } from 'types/github';
import { NextPage } from 'next';
import { ElementsContributor } from '../../../types/contributors';
import { Activity, Contributors, History } from './_components';

interface Params {
  users: ElementsContributor[];
  commitsPerMonth: GithubCommitsPerMonth;
}

export const AboutPage: NextPage<Params> = ({ users = [], commitsPerMonth = {} }) => {
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
