import styles from './footer.module.scss';
import { Routes } from '../../utils/routes';
import LinkItem from './linkItem';
import useTranslation from 'utils/hooks/useTranslation';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      {Routes.map(({ name, url, subRoutes }) => (
        <div key={url} className={styles.col}>
          <LinkItem
            url={url}
            name={t(`common.navigation.${name.replace(' ', '_')}.mainroute`)}
          />
          {subRoutes.map(({ name: subRouteName, url: subRouteUrl }) => (
            <LinkItem
              key={subRouteName + subRouteUrl}
              url={`${url}#${subRouteUrl}`}
              name={t(
                `common.navigation.${name.replace(
                  ' ',
                  '_'
                )}.subroutes.${subRouteName.replace(' ', '_')}`
              )}
              isDense={true}
            />
          ))}
        </div>
      ))}
    </footer>
  );
}
