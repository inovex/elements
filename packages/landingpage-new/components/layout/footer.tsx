import styles from './footer.module.scss';
import { Routes } from '../../utils/routes';
import LinkItem from './linkItem';
import useTranslation from 'utils/hooks/useTranslation';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
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
    </footer>
  );
}
