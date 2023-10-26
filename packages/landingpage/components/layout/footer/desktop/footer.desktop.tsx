import styles from './footer.desktop.module.scss';
import { Routes } from '../../../../utils/routes';
import LinkItem from '../../linkItem';
import useTranslation from 'utils/hooks/useTranslation';

export default function FooterDesktop() {
  const { t } = useTranslation();

  return (
    <div className={styles.sublinks}>
      {Routes.map(({ key: mainRouteName, url: mainRouteUrl, subRoutes }) => (
        <div key={mainRouteUrl} className={styles.col}>
          <LinkItem
            url={mainRouteUrl}
            name={t(`common.navigation.${mainRouteName}.name`)}
            className={styles.mainRouteName}
            noMargin={true}
          />
          {subRoutes.map(({ key: subRouteName, url: subRouteUrl }) => (
            <LinkItem
              key={subRouteUrl}
              url={subRouteUrl}
              name={t(
                `common.navigation.${mainRouteName}.subroutes.${subRouteName}.name`
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
