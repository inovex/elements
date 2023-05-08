import { Role } from './roles';
import { GithubUserTypes } from './github';

export type inovexContributor = {
  login: string;
  name: string;
  roles: Role[];
};

export type GithubContributor = {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
  type: GithubUserTypes;
};

export type ElementsContributor = inovexContributor & GithubContributor;
