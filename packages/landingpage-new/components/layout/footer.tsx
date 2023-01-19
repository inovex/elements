import styles from './footer.module.scss';
import {getDividerByMainRoute, MainRoutes, Routes} from '../../utils/routes';
import LinkItem from './linkItem';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {Routes.map(({ name: mainRouteName, url: mainRouteUrl, subRoutes }) => (
        <div key={mainRouteUrl} className={styles.col}>
          <LinkItem url={mainRouteUrl} name={mainRouteName} />
          {subRoutes.map(({ name: subRouteName, url: subRouteUrl }) => {
            const subrouteDivider = getDividerByMainRoute(mainRouteUrl as MainRoutes);
            return (
              <LinkItem
                key={subRouteName + subRouteUrl}
                url={`${mainRouteUrl}${subrouteDivider}${subRouteUrl}`}
                name={subRouteName}
                isDense={true}
              />
            );
          })}
        </div>
      ))}
    </footer>
  );
}
