import ContributorCard from 'components/about/contributor-card';
import {
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPaths,
  NextPage,
} from 'next';
import { UserTypes } from 'types/githubUserTypes';
import {
  GithubContributor,
  GithubCommitAuthor,
} from '../../../types/githubContributor';
import styles from './about.module.scss';
import {
  getLocalizationProps,
  LanguageProvider,
} from 'context/LanguageContext';
import { Localization } from 'translations/types';
import { LangContext } from 'types/langContext';

const GITHUB_REPO_URL = 'https://api.github.com/repos/inovex/elements';

enum GITHUB_CONTRIBUTOR_ID_WHITELIST {
  janivo = 22963121,
  silentHoo = 1610894,
  pfecht = 26819398,
  BenPag = 23154336,
  JCofman = 2118956,
  Sl1nd = 12165722,
  MariaLStefan = 103122411,
  AlessaRad = 76041234,
  TobiasHeimGalindo = 81302108,
}
const whitelistedIds = Object.values(GITHUB_CONTRIBUTOR_ID_WHITELIST);

interface Params {
  users: GithubContributor[];
  localization: Localization;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx as LangContext, 'about');
  console.log('in about', localization);

  const contributors: GithubContributor[] = await fetch(
    GITHUB_REPO_URL + '/contributors'
  ).then((resp) => resp.json());
  const recentContributions: GithubCommitAuthor[] = await fetch(
    GITHUB_REPO_URL + '/commits'
  ).then((resp) => resp.json());

  if (!contributors)
    return {
      props: { users: [], localization },
    };

  const filteredUser = contributors.filter(
    (contributor) =>
      contributor.type === UserTypes.USER &&
      whitelistedIds.includes(contributor.id)
  );

  if (!recentContributions)
    return { props: { users: filteredUser, localization } };

  const recentUserIds = Array.from(
    new Set(
      recentContributions
        .filter(
          (commit) =>
            commit.author.type === UserTypes.USER &&
            whitelistedIds.includes(commit.author.id)
        )
        .slice(0, 20)
        .map((commit) => commit.author.id)
    )
  );

  const userSortByContribution = [
    ...recentUserIds
      .map((userId) => filteredUser.find((user) => user.id === userId))
      .filter((user) => user != null),
    ...filteredUser.filter((user) => !recentUserIds.includes(user.id)),
  ];

  return {
    props: {
      users: userSortByContribution as GithubContributor[],
      localization,
    },
  };
};

const About: NextPage<Params> = ({
  users = [],
  localization,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <section>
        <h1 className={styles.header}>
          the <b>contributors</b>
        </h1>
      </section>
      <div className={styles.container}>
        {users.map((contributor: GithubContributor) => (
          <ContributorCard
            key={contributor.id}
            avatarUrl={contributor.avatar_url}
            username={contributor.login}
            profileLink={contributor.html_url}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: ['en', 'de'].map((lang) => ({ params: { lang } })),
  fallback: false,
});

export default About;
