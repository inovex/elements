

export type GithubParticipation = {
  all: number[];
  owner: number[];
};

export enum GithubUserTypes {
  USER = 'User',
  BOT = 'Bot',
}

export type GithubCommitsPerMonth = Record<string, number>; // e.g. Dec 21 => 5
