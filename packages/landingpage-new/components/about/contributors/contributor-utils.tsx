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

type UserInformation = {
  role: string;
  name: string;
};

export const userInfo: Map<GITHUB_CONTRIBUTOR_ID_WHITELIST, UserInformation> =
  new Map([
    [
      GITHUB_CONTRIBUTOR_ID_WHITELIST.janivo,
      { role: 'Project Manager & Developer', name: 'Jan-Niklas' },
    ],
    [
      GITHUB_CONTRIBUTOR_ID_WHITELIST.silentHoo,
      { role: 'Frontend Expert', name: 'Patrick' },
    ],
    [
      GITHUB_CONTRIBUTOR_ID_WHITELIST.pfecht,
      { role: 'Product Owner', name: 'Pascal' },
    ],
    [
      GITHUB_CONTRIBUTOR_ID_WHITELIST.BenPag,
      { role: 'Fullstack Developer', name: 'Benjamin' },
    ],
    [
      GITHUB_CONTRIBUTOR_ID_WHITELIST.JCofman,
      { role: 'Frontend Engineer', name: 'Jacob' },
    ],
    [
      GITHUB_CONTRIBUTOR_ID_WHITELIST.Sl1nd,
      { role: 'Frontend Expert', name: 'Sven' },
    ],
    [
      GITHUB_CONTRIBUTOR_ID_WHITELIST.MariaLStefan,
      { role: 'Frontend Developer', name: 'Maria-Luisa' },
    ],
    [
      GITHUB_CONTRIBUTOR_ID_WHITELIST.AlessaRad,
      { role: 'Frontend Developer', name: 'Alessa' },
    ],
    [
      GITHUB_CONTRIBUTOR_ID_WHITELIST.TobiasHeimGalindo,
      { role: 'Frontend Developer', name: 'Tobias' },
    ],
    [
      GITHUB_CONTRIBUTOR_ID_WHITELIST.ninaschlz,
      { role: 'Frontend Developer', name: 'Nina' },
    ],
    [
      GITHUB_CONTRIBUTOR_ID_WHITELIST.MBuchberger,
      { role: 'User Experience Designer', name: 'Magdalena' },
    ],
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
