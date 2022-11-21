import Card from 'components/home/component-sample/card';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  GithubContributor,
  RecentContributor,
  GithubCommitAuthor,
} from '../../types/githubContributor';
import { UserTypes } from '../../types/githubUserTypes';
import styles from './about.module.scss';

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

interface Params {
  users: GithubContributor[];
  recentContributions: GithubCommitAuthor[];
}

export const getStaticProps: GetStaticProps<Params> = async () => {
  const contributors = await fetch(GITHUB_REPO_URL + '/contributors');
  const commits = await fetch(GITHUB_REPO_URL + '/commits');
  const users: GithubContributor[] = await contributors.json();
  const recentContributions: GithubCommitAuthor[] = await commits.json();
  const whitelistedIds = Object.values(GITHUB_CONTRIBUTOR_ID_WHITELIST);

  if (!users)
    return {
      props: { users: [], recentContributions: [] },
    };

  const filteredContributions = recentContributions
    .filter(
      (commit) =>
        commit.author.type === UserTypes.USER &&
        whitelistedIds.includes(commit.author.id)
    )
    .slice(0, 20);
  const filteredUser = users.filter(
    (user) => user.type === UserTypes.USER && whitelistedIds.includes(user.id)
  );

  return {
    props: { users: filteredUser, recentContributions: filteredContributions },
  };
};

function About({
  users = [],
  recentContributions = [],
}: InferGetStaticPropsType<typeof getStaticProps>) {
  //removes duplicate commit authors of the last 20 commits
  const uniqueCommits = recentContributions.reduce(
    (map, commit) => map.set(commit.author.login, commit),
    new Map()
  );

  const recentContributorNames = Array.from(uniqueCommits.keys());

  function recentContributors(): JSX.Element {
    //compare the recent Contributors to the overall whitelisted users
    const recentContributors: RecentContributor[] = [];
    for (const recentContributor of recentContributorNames) {
      for (const user of users) {
        if (user.login === recentContributor) {
          // create recentContributors Array with the user information (avatar_url etc.)
          recentContributors.push({
            id: user.id,
            login: user.login,
            avatar_url: user.avatar_url,
            html_url: user.html_url,
          });
        }
      }
    }
    //filter out the recentContributors from the users[] property => overallContributors
    const usersID = new Set(recentContributors.map(({ id }) => id));
    const overallContributors = [...users.filter(({ id }) => !usersID.has(id))];

    return (
      <div className={styles.container}>
        {recentContributors.map((contributor) => (
          <div key={contributor.id}>
            <Card
              componentName={contributor.login}
              componentCategory={
                <Link href={contributor.html_url}>{contributor.html_url}</Link>
              }
            >
              <div>
                <Image
                  className={styles.Image}
                  src={contributor.avatar_url}
                  width={75}
                  height={75}
                  alt={`Avatar of ${contributor.login}`}
                />
              </div>
            </Card>
          </div>
        ))}
        {overallContributors.map((contributor) => (
          <div key={contributor.id}>
            <Card
              componentName={contributor.login}
              componentCategory={
                <Link href={contributor.html_url}>{contributor.html_url}</Link>
              }
            >
              <div>
                <Image
                  className={styles.Image}
                  src={contributor.avatar_url}
                  width={75}
                  height={75}
                  alt={`Avatar of ${contributor.login}`}
                />
              </div>
            </Card>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <section>
        <h1 className={styles.header}>
          the <b>contributors</b>
        </h1>
        {recentContributors()}
      </section>
    </div>
  );
}

export default About;
