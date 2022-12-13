import styles from './contributors.module.scss';
import ContributorCard from './contributor-card';
import { GithubContributor } from '../../../types/githubContributor';
import { GITHUB_CONTRIBUTOR_ID_WHITELIST } from './contributor-utils';

const roles: Map<GITHUB_CONTRIBUTOR_ID_WHITELIST, string> = new Map([
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

interface Params {
  users: GithubContributor[];
}

function Contributors({ users }: Params) {
  return (
    <>
      <h1 className={styles.header}>
        <b>contributors</b> @ inovex elements
      </h1>
      <div className={styles.container}>
        {users?.length === 0 ? (
          <div>No recent contributors found.</div>
        ) : (
          users?.map((contributor: GithubContributor) => (
            <ContributorCard
              role={roles.get(contributor.id) ?? ''}
              key={contributor.id}
              avatarUrl={contributor.avatar_url}
              username={contributor.login}
              profileLink={contributor.html_url}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Contributors;
