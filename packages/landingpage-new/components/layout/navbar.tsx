import { useRouter } from 'next/router';
import styles from './navbar.module.scss';
import {
  getDividerByMainRoute,
  MainRoutes,
  Routes,
  SubRoutes,
} from '../../utils/routes';
import LinkItem from './linkItem';
import { InoButton, InoPopover } from '@elements';
import Link from 'next/link';
import useTranslation from 'utils/hooks/useTranslation';

const POPOVER_OFFSET = -46;

export default function Navbar() {
  const router = useRouter();
  const { t, locale } = useTranslation();

  function isRouteActive(mainRouteUrl: string, mainRouteName: string) {
    const pathSplit = router.pathname.split('/');
    if (pathSplit.length === 2 && mainRouteName === 'home') return true;
    else return pathSplit[2] === mainRouteUrl.slice(1); // check first path after [lang]
  }

  return (
    <nav className={styles.navbar}>
      {Routes.map(({ name: mainRouteName, url: mainRouteUrl, subRoutes }) => (
        <div key={mainRouteUrl}>
          <div id={mainRouteName}>
            <LinkItem
              url={mainRouteUrl}
              name={t(
                `common.navigation.${mainRouteName.replace(' ', '_')}.mainroute`
              )}
              isActive={isRouteActive(mainRouteUrl, mainRouteName)}
            />
          </div>
          <InoPopover
            for={mainRouteName}
            interactive
            placement="bottom"
            trigger="mouseenter"
            controlled={false}
            visible={false}
            distance={POPOVER_OFFSET}
            colorScheme="transparent"
          >
            <div className={styles.popover}>
              <LinkItem
                url={mainRouteUrl}
                name={t(
                  `common.navigation.${mainRouteName.replace(
                    ' ',
                    '_'
                  )}.mainroute`
                )}
                isActive={isRouteActive(mainRouteUrl, mainRouteName)}
                noMargin={true}
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
          </InoPopover>
        </div>
      ))}
      <Link href={`/${locale}#${SubRoutes.HOME_CONTACT}`}>
        <InoButton>
          <span>{t('common.navigation.contact')}</span>
        </InoButton>
      </Link>
    </nav>
  );
}
