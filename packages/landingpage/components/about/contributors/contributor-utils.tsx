import { GithubUserTypes } from 'types/github';
import { Role } from 'types/roles';
import { CONTRIBUTORS } from 'utils/contributors';
import {
  ElementsContributor,
  GithubContributor,
} from '../../../types/contributors';

const GITHUB_REPO_URL = 'https://api.github.com/repos/inovex/elements';
const GITHUB_USERS_API = 'https://api.github.com/users/';

const contributorLogins = CONTRIBUTORS.map((c) => c.login);

export async function getGitHubContributers(): Promise<ElementsContributor[]> {
  const contributorsResponse: GithubContributor[] = await fetch(
    GITHUB_REPO_URL + '/contributors'
  ).then((resp) => resp.json());

  if (!Array.isArray(contributorsResponse)) return [];

  const developers: ElementsContributor[] = contributorsResponse
    .filter((c) => c.type === GithubUserTypes.USER)
    .filter((c) => contributorLogins.includes(c.login))
    .map((c) => {
      const found = CONTRIBUTORS.find(
        (contributor) => c.login === contributor.login
      );

      return {
        ...c,
        ...found,
      } as ElementsContributor;
    });

  const designers = await getDesigners();

  return [...developers, ...designers];
}

const getDesigners = async () => {
  const designerGithubProfile: GithubContributor[] = [];
  await Promise.all(
    CONTRIBUTORS.filter((c) => c.roles.includes(Role.DESIGN)).map(async (c) => {
      designerGithubProfile.push(
        await fetch(GITHUB_USERS_API + c.login).then((res) => res.json())
      );
    })
  );
  return designerGithubProfile.map((c) => {
    const found = CONTRIBUTORS.find(
      (contributor) => c.login === contributor.login
    );

    return {
      ...c,
      ...found,
    } as ElementsContributor;
  });
};
