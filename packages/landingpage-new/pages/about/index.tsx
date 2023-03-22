import { SubRoutes } from '../../utils/routes';
import { getGitHubContributers } from '../../components/about/contributors/contributor-utils';
import History from '../../components/about/history';
import Activity from '../../components/about/activity';
import { GetStaticProps } from 'next';
import {
  GithubContributor,
  GithubParticipation,
  GithubCommitsPerMonth,
} from 'types/github';
import Contributors from 'components/about/contributors/contributors';
import { endOfWeek, format, startOfMonth, subWeeks } from 'date-fns';

const GITHUB_REPO_URL = 'https://api.github.com/repos/inovex/elements';
const NUMBER_WEEKS_PER_YEAR = 52;

async function getCommitPerMonth(): Promise<GithubCommitsPerMonth> {
  const fetchResult = await fetch(GITHUB_REPO_URL + '/stats/participation');
  const activities: GithubParticipation = await fetchResult.json();

  const lastDayOfCurrentWeek = endOfWeek(new Date());
  return activities.all
    .map((commitsPerWeek, index) => {
      const week = subWeeks(
        lastDayOfCurrentWeek,
        NUMBER_WEEKS_PER_YEAR - index
      );
      const month = startOfMonth(week);
      return {
        month: format(month, 'MMM yy'),
        commitsPerWeek,
      };
    })
    .reduce((prev, current) => {
      const prevMonth = prev[current.month];

      if (prevMonth) prev[current.month] += current.commitsPerWeek;
      else prev[current.month] = current.commitsPerWeek;

      return prev;
    }, {} as GithubCommitsPerMonth);
}

export const getStaticProps: GetStaticProps<Params> = async () => {
  const users = await getGitHubContributers();
  const commitsPerMonth = await getCommitPerMonth();

  return { props: { users, commitsPerMonth } };
};

interface Params {
  users: GithubContributor[];
  commitsPerMonth: GithubCommitsPerMonth;
}

function About({ users = [], commitsPerMonth = {} }: Params) {
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
}

export default About;
