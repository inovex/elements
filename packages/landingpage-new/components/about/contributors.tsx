import styles from './contributors.module.scss'
import ContributorCard from 'components/about/contributor-card';
import { useEffect, useState } from 'react';
import {
  GithubContributor,
  GithubCommitAuthor,
} from '../../types/githubContributor';
import { UserTypes } from '../../types/githubUserTypes';

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
  ninaschlz = 93990641,
}
const whitelistedIds = Object.values(GITHUB_CONTRIBUTOR_ID_WHITELIST);

const getGitHubContributers = async () => {
    const contributors: GithubContributor[] = await fetch(
      GITHUB_REPO_URL + '/contributors'
    ).then((resp) => resp.json());
    const recentContributions: GithubCommitAuthor[] = await fetch(
      GITHUB_REPO_URL + '/commits'
    ).then((resp) => resp.json());
  
    if (!contributors)
      return []
  
    const filteredUser = contributors.filter(
      (contributor) =>
        contributor.type === UserTypes.USER &&
        whitelistedIds.includes(contributor.id)
    );
  
    if (!recentContributions) return filteredUser;
  
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

    return userSortByContribution as GithubContributor[]
  };

function Contributors() {
    const [users, setUsers] = useState([] as GithubContributor[])

    useEffect(() => {
        getGitHubContributers().then(users => setUsers(users as GithubContributor[]))
    }, [])
    
    return(
        <>
            <h1 className={styles.header}>
                the <b>contributors</b>
            </h1>
            <div className={styles.container}>
            {users.map((contributor: GithubContributor) => (
                <ContributorCard
                key={contributor.id}
                avatarUrl={contributor.avatar_url}
                username={contributor.login}
                profileLink={contributor.html_url}
                />
            ))}
            {users.length === 0 && <div>No recent contributors</div>}
            </div>
        </>
    );
}

export default Contributors;