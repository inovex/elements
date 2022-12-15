import styles from './contributors.module.scss';
import ContributorCard from './contributor-card';
import { GithubContributor } from '../../../types/githubContributor';
import { roles, names } from './contributor-utils';

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
              username={names.get(contributor.id) ?? contributor.login}
              profileLink={contributor.html_url}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Contributors;
