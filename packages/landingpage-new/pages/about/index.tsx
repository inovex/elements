import { SubRoutes } from '../../utils/routes';
import {getGitHubContributers} from '../../components/about/contributors/contributor-utils'
import History from '../../components/about/history'
import Activity from '../../components/about/activity'
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { GithubContributor } from 'types/githubContributor';
import Contributors from 'components/about/contributors/contributors';

export const getStaticProps: GetStaticProps<Params> = async () => {
  return await getGitHubContributers().then((users: GithubContributor[]) => {
    return {props: {users}};
  });
};

interface Params {
  users: GithubContributor[];
}

function About({ users = [] }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="section-container">
      <section id={SubRoutes.ABOUT_TEAM}>
        <Contributors users={users}/>
      </section>
      <section id={SubRoutes.ABOUT_HISTORY}>
        <History />
      </section>
      <section id={SubRoutes.ABOUT_ACTIVITY}>
        <Activity />
      </section>
    </div>
  );
}

export default About;
