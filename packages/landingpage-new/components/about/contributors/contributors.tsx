import styles from './contributors.module.scss';
import ContributorCard from './contributor-card';
import { GithubContributor } from 'types/github';
import { userInfo } from './contributor-utils';
import useTranslation from 'utils/hooks/useTranslation';

interface Params {
  users: GithubContributor[];
}

function Contributors({ users }: Params) {
  const { t } = useTranslation();
  return (
    <>
      <h1 className={styles.header}>
        <b>{t('contributors.title_1')}</b> {t('contributors.title_2')}
      </h1>
      <div className={styles.container}>
        {users?.length === 0 ? (
          <div>{t('contributors.not_found')}</div>
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
