import styles from './contributors.module.scss';
import ContributorCard from './contributor-card';
import { useContext } from 'react';
import { I18NContext } from '../../../../../utils/context/i18nContext';
import { ElementsContributor } from '../../../../../types/contributors';

interface Params {
  users: ElementsContributor[];
}

function Contributors({ users }: Params) {
  const { t } = useContext(I18NContext);
  return (
    <>
      <h1 className="header-d3">
        <b>{t('about.contributors.title_1')}</b>{' '}
        {t('about.contributors.title_2')}
      </h1>
      <div className={styles.container}>
        {users?.length === 0 ? (
          <div>{t('about.contributors.not_found')}</div>
        ) : (
          users?.map((contributor) => (
            <ContributorCard
              role={contributor.roles
                .map((r) => t(`about.contributors.roles.${r}`))
                .join(' & ')}
              key={contributor.id}
              avatarUrl={contributor.avatar_url}
              username={contributor.name}
              profileLink={contributor.html_url}
              isInactive={contributor.isInactive}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Contributors;
