import { UserTypes } from './githubUserTypes';

export type GithubContributor = {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
  type: UserTypes;
};

export type GithubCommitAuthor = {
  author: {
    id: number;
    login: string;
    html_url: string;
    avatar_url: string;
    type: UserTypes;
  };
};

export type RecentContributor = {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
};