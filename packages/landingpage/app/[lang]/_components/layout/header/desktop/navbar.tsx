import styles from './navbar.module.scss';
import { Routes } from '@routes';
import LinkItem from '../../linkItem';
import { InoPopover } from '@inovex.de/elements-react';
import ContactButton from '../contactButton';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@hooks/useTranslation';

const POPOVER_OFFSET = 10;

export default function Navbar() {
  const pathName = usePathname();
  const { t } = useTranslation();

  function isRouteActive(mainRouteUrl: string, mainRouteName: string) {
    const pathSplit = pathName?.split('/') ?? [];
    if (pathSplit.length <= 2 && mainRouteName === 'home') return true;
    else return pathSplit[2] === mainRouteUrl.slice(1); // check first path after [lang]
  }

  return (
    <nav className={styles.navbar}>
      {Routes.map(({ key, url: mainRouteUrl, subRoutes }) => (
        <div key={mainRouteUrl}>
          <div id={key}>
            <LinkItem
              url={mainRouteUrl}
              name={t(`common.navigation.${key}.name` as LocaleResourcePaths)}
              isActive={isRouteActive(mainRouteUrl, key)}
            />
          </div>
          {subRoutes.length > 1 && (
            <InoPopover
              for={key}
              interactive
              placement="bottom"
              trigger="mouseenter"
              controlled={false}
              visible={false}
              distance={POPOVER_OFFSET}
              colorScheme="light"
              arrow={true}
            >
              <div className={styles.popover}>
                {subRoutes.map(({ key: subRouteName, url: subRouteUrl }) => (
                  <LinkItem
                    key={subRouteUrl}
                    url={subRouteUrl}
                    name={t(
                      `common.navigation.${key}.subroutes.${subRouteName}.name` as LocaleResourcePaths,
                    )}
                    isDense={true}
                    isSubItem={true}
                  />
                ))}
              </div>
            </InoPopover>
          )}
        </div>
      ))}
      <ContactButton />
    </nav>
  );
}
