export type GithubContributor = {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
  type: GithubUserTypes;
};

export type GithubCommitAuthor = {
  author: GithubContributor;
};

export type GithubParticipation = {
  all: number[];
  owner: number[];
};

export enum GithubUserTypes {
  USER = 'User',
  BOT = 'Bot',
}

export type GithubCommitsPerMonth = Record<string, number>; // e.g. Dec 21 => 5
