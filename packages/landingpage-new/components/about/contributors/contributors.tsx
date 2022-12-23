import styles from './contributors.module.scss';
import ContributorCard from './contributor-card';
import { GithubContributor } from 'types/github';
import { userInfo } from './contributor-utils';

interface Params {
  users: GithubContributor[];
}

function Contributors({ users }: Params) {
  return (
    <>
      <h1 className="header-d3">
        <b>contributors</b> @ inovex elements
      </h1>
      <div className={styles.container}>
        {users?.length === 0 ? (
          <div>No recent contributors found.</div>
        ) : (
          users?.map((contributor: GithubContributor) => (
            <ContributorCard
              role={userInfo.get(contributor.id)?.role ?? ''}
              key={contributor.id}
              avatarUrl={contributor.avatar_url}
              username={userInfo.get(contributor.id)?.name ?? contributor.login}
              profileLink={contributor.html_url}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Contributors;
