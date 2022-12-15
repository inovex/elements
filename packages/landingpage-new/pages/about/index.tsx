import { SubRoutes } from '../../utils/routes';
import { getGitHubContributers } from '../../components/about/contributors/contributor-utils';
import History from '../../components/about/history';
import Activity from '../../components/about/activity';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { GithubContributor } from 'types/githubContributor';
import Contributors from 'components/about/contributors/contributors';
import {
  fillDate,
  getGithubActivities,
} from 'components/about/activity/activity-utils';
import { GithubActivity } from 'types/githubActivity';

export const getStaticProps: GetStaticProps<Params> = async () => {
  const users = await getGitHubContributers().then(
    (users: GithubContributor[]) => users
  );
  const activities = await getGithubActivities().then(
    (activities: GithubActivity[]) => {
      if (Array.isArray(activities)) {
        return fillDate(activities);
      } else {
        return [];
      }
    }
  );

  return { props: { users, activities } };
};

interface Params {
  users: GithubContributor[];
  activities: GithubActivity[];
}

function About({
  users = [],
  activities = [],
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="section-container">
      <section id={SubRoutes.ABOUT_TEAM}>
        <Contributors users={users} />
      </section>
      <section id={SubRoutes.ABOUT_HISTORY}>
        <History />
      </section>
      <section id={SubRoutes.ABOUT_ACTIVITY}>
        <Activity githubActivities={activities} />
      </section>
    </div>
  );
}

export default About;
