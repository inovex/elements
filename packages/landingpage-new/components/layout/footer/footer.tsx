import styles from './footer.module.scss';
import { Routes } from '../../../utils/routes';
import LinkItem from '../linkItem';
import useTranslation from 'utils/hooks/useTranslation';
import Attributions from '../attributions';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.sublinks}>
        {Routes.map(({ key: mainRouteName, url: mainRouteUrl, subRoutes }) => (
          <div key={mainRouteUrl} className={styles.col}>
            <LinkItem
              url={mainRouteUrl}
              name={t(`common.navigation.${mainRouteName}.name`)}
            />
            {subRoutes.map(({ key: subRouteName, url: subRouteUrl }) => (
              <LinkItem
                key={subRouteUrl}
                url={subRouteUrl}
                name={t(
                  `common.navigation.${mainRouteName}.subroutes.${subRouteName}.name`
                )}
                isDense={true}
              />
            ))}
          </div>
        ))}
        <div className={`${styles.col} ${styles.empty}`}>
        </div>  
        <div className={`${styles.col} ${styles.empty}`}>
        </div>
        <div className={`${styles.col} ${styles.empty}`}>
        </div>     
        <div className={`${styles.col} ${styles.empty}`}>
        </div>  
      </div>
      <Attributions />
    </footer>
  );
}
