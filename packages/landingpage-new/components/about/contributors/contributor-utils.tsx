import { GithubCommitAuthor, GithubContributor } from 'types/githubContributor';
import { UserTypes } from 'types/githubUserTypes';

const GITHUB_REPO_URL = 'https://api.github.com/repos/inovex/elements';
const GITHUB_USERS_API = 'https://api.github.com/users/';

export enum GITHUB_CONTRIBUTOR_ID_WHITELIST {
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
  MBuchberger = 117914010,
}
const whitelistedIds = Object.values(GITHUB_CONTRIBUTOR_ID_WHITELIST);

export const roles: Map<GITHUB_CONTRIBUTOR_ID_WHITELIST, string> = new Map([
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.janivo, 'Project Manager & Developer'],
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.silentHoo, 'Frontend Expert'],
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.pfecht, 'Product Owner'],
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.BenPag, 'Fullstack Developer'],
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.JCofman, 'Frontend Engineer'],
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.Sl1nd, 'Frontend Expert'],
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.MariaLStefan, 'Frontend Developer'],
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.AlessaRad, 'Frontend Developer'],
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.TobiasHeimGalindo, 'Frontend Developer'],
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.ninaschlz, 'Frontend Developer'],
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.MBuchberger, 'User Experience Designer'],
]);

export const names: Map<GITHUB_CONTRIBUTOR_ID_WHITELIST, string> = new Map([
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.janivo, 'Jan-Niklas'],
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.silentHoo, 'Patrick'],
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.pfecht, 'Pascal'],
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.BenPag, 'Benjamin'],
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.JCofman, 'Jacob'],
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.Sl1nd, 'Sven'],
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.MariaLStefan, 'Maria-Luisa'],
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.AlessaRad, 'Alessa'],
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.TobiasHeimGalindo, 'Tobias'],
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.ninaschlz, 'Nina'],
  [GITHUB_CONTRIBUTOR_ID_WHITELIST.MBuchberger, 'Magdalena'],
]);

const allDesigners = ['MBuchberger'];

export async function getGitHubContributers(): Promise<GithubContributor[]> {
  const contributors: GithubContributor[] = await fetch(
    GITHUB_REPO_URL + '/contributors'
  ).then((resp) => resp.json());

  const recentContributions: GithubCommitAuthor[] = await fetch(
    GITHUB_REPO_URL + '/commits'
  ).then((resp) => resp.json());

  if (!Array.isArray(contributors)) return [];

  const filteredUser = contributors.filter(
    (contributor) =>
      contributor.type === UserTypes.USER &&
      whitelistedIds.includes(contributor.id)
  );

  if (!Array.isArray(recentContributions)) return filteredUser;

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

  return userSortByContribution as GithubContributor[];
}

const getDesigners = async () => {
  const designerGithubProfile: GithubContributor[] = [];
  await Promise.all(
    allDesigners.map(async (username) => {
      designerGithubProfile.push(
        await fetch(GITHUB_USERS_API + username).then((res) => res.json())
      );
    })
  );
  return designerGithubProfile;
};
