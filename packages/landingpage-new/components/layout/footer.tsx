import styles from './footer.module.scss';
import { getDividerByMainRoute, MainRoutes, Routes } from '../../utils/routes';
import LinkItem from './linkItem';
import useTranslation from 'utils/hooks/useTranslation';
import Image from 'next/image';
import inovexLogo from '@assets/inovex-logo.svg';
import classNames from 'classnames';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.sublinks}>
        {Routes.map(({ name: mainRouteName, url: mainRouteUrl, subRoutes }) => (
          <div key={mainRouteUrl} className={styles.col}>
            <LinkItem
              url={mainRouteUrl}
              name={t(
                `common.navigation.${mainRouteName.replace(' ', '_')}.mainroute`
              )}
            />
            {subRoutes.map(({ name: subRouteName, url: subRouteUrl }) => {
              const subrouteDivider = getDividerByMainRoute(
                mainRouteUrl as MainRoutes
              );
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
      </div>
      <a
        className={classNames(styles.inovexClaim, 'body-m')}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.inovex.de/"
      >
        <small>provided by</small>
        <Image
          src={inovexLogo}
          alt="Github Logo"
          width={30}
          height={30}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <small>inovex GmbH</small>
      </a>
    </footer>
  );
}
