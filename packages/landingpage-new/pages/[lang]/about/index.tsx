import { SubRoutes } from 'utils/routes';
import { getGitHubContributers } from 'components/about/contributors/contributor-utils';
import History from 'components/about/history';
import Activity from 'components/about/activity';
import {
  GithubCommitsPerMonth,
  GithubContributor,
  GithubParticipation,
} from 'types/github';
import Contributors from 'components/about/contributors/contributors';
import { endOfWeek, format, startOfMonth, subWeeks } from 'date-fns';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { Localization, Locale_File } from 'translations/types';
import { LangContext } from 'types/langContext';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from 'utils/context/staticPaths';
import { de, enUS } from 'date-fns/locale';
import { Supported_Locales } from 'translations/config';
import Page from 'components/layout/page';
import useTranslation from 'utils/hooks/useTranslation';

const GITHUB_REPO_URL = 'https://api.github.com/repos/inovex/elements';
const NUMBER_WEEKS_PER_YEAR = 52;

async function getCommitPerMonth(
  locale: string
): Promise<GithubCommitsPerMonth> {
  const maybeGithubToken = process.env.GITHUB_TOKEN;
  const requestInit: RequestInit = {};

  if (maybeGithubToken) {
    console.log(
      'Found a Github Token in your environment. Using it to fetch commit info.'
    );
    requestInit.headers = new Headers({
      authorization: `Bearer ${maybeGithubToken}`,
    });
  } else {
    console.warn(
      'An github token was not found in your environment. Trying to fetch commit info without a token. You might run into a rate limit.'
    );
  }

  const fetchResult = await fetch(
    GITHUB_REPO_URL + '/stats/participation',
    requestInit
  );

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
  users: GithubContributor[];
  commitsPerMonth: GithubCommitsPerMonth;
  localization: Localization;
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  const users = await getGitHubContributers();
  const { localization } = getStaticLanguageProps(
    ctx as LangContext,
    Locale_File.ABOUT
  ).props;
  const commitsPerMonth = await getCommitPerMonth(localization.locale);

  return { props: { users, commitsPerMonth, localization } };
};

export const getStaticPaths: GetStaticPaths = async () =>
  getStaticLanguagePaths();

export default About;
