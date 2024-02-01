import { SubRoutes } from 'utils/routes';
import { getGitHubContributers } from 'components/about/contributors/contributor-utils';
import History from 'components/about/history';
import Activity from 'components/about/activity';
import { GithubCommitsPerMonth, GithubParticipation } from 'types/github';
import Contributors from 'components/about/contributors/contributors';
import { endOfWeek, format, startOfMonth, subWeeks } from 'date-fns';
import { GetStaticProps, NextPage } from 'next';
import { Localization } from 'translations/types';
import { de, enUS } from 'date-fns/locale';
import { Supported_Locales } from 'translations/config';
import Page from 'components/layout/page';
import useTranslation from 'utils/hooks/useTranslation';
import { ElementsContributor } from '../../types/contributors';
import { inDevEnvironment } from '../../utils/in-dev-mode';

const GITHUB_REPO_URL = 'https://api.github.com/repos/inovex/elements';
const NUMBER_WEEKS_PER_YEAR = 52;

async function getCommitPerMonth(
  locale: string,
): Promise<GithubCommitsPerMonth> {
  const maybeGithubToken = process.env.GITHUB_TOKEN;
  const requestInit: RequestInit = {};

  if (maybeGithubToken) {
    console.log(
      'Found a Github Token in your environment. Using it to fetch commit info.',
    );
    requestInit.headers = new Headers({
      authorization: `Bearer ${maybeGithubToken}`,
    });
  } else {
    console.warn(
      'An github token was not found in your environment. Trying to fetch commit info without a token. You might run into a rate limit.',
    );
  }

  const fetchResult = await fetch(
    GITHUB_REPO_URL + '/stats/participation',
    requestInit,
  );

  if (fetchResult.status === 403) {
    const rateLimitWarning = 'Github rate limit exceeded. Try again later.';

    if (inDevEnvironment) {
      console.warn(rateLimitWarning);
      return {};
    } else {
      throw new Error(rateLimitWarning);
    }
  }

  const activities: GithubParticipation = await fetchResult.json();

  const lastDayOfCurrentWeek = endOfWeek(new Date());
  return activities.all
    .map((commitsPerWeek, index) => {
      const week = subWeeks(
        lastDayOfCurrentWeek,
        NUMBER_WEEKS_PER_YEAR - index,
      );
      const month = startOfMonth(week);
      return {
        month: format(month, 'MMM yy', {
          locale: locale === Supported_Locales.DE ? de : enUS,
        }),
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

interface Params {
  users: ElementsContributor[];
  commitsPerMonth: GithubCommitsPerMonth;
  translations: Localization['translations'];
}

export const About: NextPage<Params> = ({
  users = [],
  commitsPerMonth = {},
}) => {
  const { t } = useTranslation();

  return (
    <Page title={[t('common.meta.about')]}>
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
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async ({  locale }) => {
  const users = await getGitHubContributers();
  const commitsPerMonth = await getCommitPerMonth(locale!);
  return { props: { users, commitsPerMonth } };
};

export default About;
