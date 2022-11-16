import { UserTypes } from './githubUserTypes';

export type GithubContributor = {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
  type: UserTypes;
};
