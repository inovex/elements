import styles from './footer.module.scss';
import {getDividerByMainRoute, MainRoutes, Routes} from '../../utils/routes';
import LinkItem from './linkItem';
import useTranslation from 'utils/hooks/useTranslation';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      {Routes.map(({ name: mainRouteName, url: mainRouteUrl, subRoutes }) => (
        <div key={mainRouteUrl} className={styles.col}>
          <LinkItem url={mainRouteUrl} name={t(`common.navigation.${mainRouteName.replace(' ', '_')}.mainroute`)} />
          {subRoutes.map(({ name: subRouteName, url: subRouteUrl }) => {
            const subrouteDivider = getDividerByMainRoute(mainRouteUrl as MainRoutes);
            return (
              <LinkItem
                key={subRouteName + subRouteUrl}
                url={`${mainRouteUrl}${subrouteDivider}${subRouteUrl}`}
                name={t(
                  `common.navigation.${mainRouteName.replace(
                    ' ',
                    '_'
                  )}.subroutes.${subRouteName.replace(' ', '_')}`
                )}
                isDense={true}
              />
            );
          })}
        </div>
      ))}
    </footer>
  );
}
