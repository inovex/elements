import { getGitHubContributers } from './components/contributors/contributor-utils';
import { GithubCommitsPerMonth, GithubParticipation } from 'types/github';
import { endOfWeek, format, startOfMonth, subWeeks } from 'date-fns';
import { de, enUS } from 'date-fns/locale';
import { Supported_Locales } from 'translations/config';
import { inDevEnvironment } from '../../../utils/in-dev-mode';
import { AboutPage } from './client';
import { getMetaTitle } from '../../../utils/getMetaTitle';
import { ParamsWithLang } from '../../../types/langParam';

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

export async function generateMetadata({ params }: ParamsWithLang) {
  return {
    title: await getMetaTitle('common.meta.about', params.lang),
  };
}

export default async function Page({ params }: ParamsWithLang) {
  const users = await getGitHubContributers();
  const commitsPerMonth = await getCommitPerMonth(params.lang);

  return <AboutPage users={users} commitsPerMonth={commitsPerMonth} />;
}
