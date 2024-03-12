import styles from './footer.desktop.module.scss';
import { Routes } from '@routes';
import LinkItem from '../../linkItem';
import { useTranslation } from '@hooks/useTranslation';

export default function FooterDesktop() {
  const { t } = useTranslation();

  return (
    <div className={styles.sublinks}>
      {Routes.map(({ key: mainRouteName, url: mainRouteUrl, subRoutes }) => (
        <div key={mainRouteUrl} className={styles.col}>
          <LinkItem
            url={mainRouteUrl}
            name={t(
              `common.navigation.${mainRouteName}.name` as LocaleResourcePaths,
            )}
            className={styles.mainRouteName}
            noMargin={true}
          />
          {subRoutes.map(({ key: subRouteName, url: subRouteUrl }) => (
            <LinkItem
              key={subRouteUrl}
              url={subRouteUrl}
              name={t(
                `common.navigation.${mainRouteName}.subroutes.${subRouteName}.name` as LocaleResourcePaths,
              )}
              isDense={true}
              className={styles.subRouteName}
              isFooter={true}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
