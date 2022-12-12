import styles from './contributors.module.scss'
import ContributorCard from 'components/about/contributor-card';
import { useEffect, useState } from 'react';
import {
  GithubContributor,
  GithubCommitAuthor,
} from '../../types/githubContributor';
import { UserTypes } from '../../types/githubUserTypes';
import { InoSpinner } from '@elements';

const GITHUB_REPO_URL = 'https://api.github.com/repos/inovex/elements';
const GITHUB_USERS_API = 'https://api.github.com/users/';

const roles: Map<number, string> = new Map([
  [22963121, 'Project Manager & Developer'], // janivo
  [1610894, 'Frontend Expert'], // silentHoo
  [26819398, 'Product Owner'], // pfecht
  [23154336, 'Fullstack Developer'], // BenPag
  [2118956, 'Frontend Engineer'], // JCofman
  [12165722, 'Frontend Expert'], // Sl1nd
  [103122411, 'Frontend Developer'], // MariaLStefan
  [76041234, 'Frontend Developer'], // AlessaRad
  [81302108, 'Frontend Developer'], // TobiasHeimGalindo
  [93990641, 'Frontend Developer'], // ninaschlz
  [117914010, 'User Experience Designer'], // MBuchberger
]);

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
  MBuchberger = 117914010
}
const whitelistedIds = Object.values(GITHUB_CONTRIBUTOR_ID_WHITELIST);

const allDesigners = ['MBuchberger'];

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
  
    let userSortByContribution = [
      ...recentUserIds
        .map((userId) => filteredUser.find((user) => user.id === userId))
        .filter((user) => user != null),
      ...filteredUser.filter((user) => !recentUserIds.includes(user.id)),
    ];

    const designers: GithubContributor[] = await getDesigners();
    userSortByContribution = [...userSortByContribution, ...designers];

    return userSortByContribution as GithubContributor[]
  };

  const getDesigners = async () => {
    const designerGithubProfile: GithubContributor[] = [];
    await Promise.all(
      allDesigners.map(async (username) => {
        designerGithubProfile.push(await fetch(GITHUB_USERS_API + username).then(res => res.json()))
      })
    )
    return designerGithubProfile;
  }

function Contributors() {
    const [users, setUsers] = useState([] as GithubContributor[]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getGitHubContributers().then(users => {
          setUsers(users as GithubContributor[])
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }, [])
    
    return(
        <>
            <h1 className={styles.header}>
                <b>contributors</b> @ inovex elements
            </h1>
            <div className={styles.container}>
            {loading 
            ? <InoSpinner type="circle"/>
            : users.length === 0 
              ? <div>No recent contributors found.</div>
              : users.map((contributor: GithubContributor) => (
                <ContributorCard
                  role={roles.get(contributor.id) ?? ''}
                  key={contributor.id}
                  avatarUrl={contributor.avatar_url}
                  username={contributor.login}
                  profileLink={contributor.html_url}
                  />
              ))}
            </div>
        </>
    );
}

export default Contributors;