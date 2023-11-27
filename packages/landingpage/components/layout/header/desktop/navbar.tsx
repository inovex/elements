import { useRouter } from 'next/router';
import styles from './navbar.module.scss';
import { Routes } from '../../../../utils/routes';
import LinkItem from '../../linkItem';
import { InoPopover, InoSwitch } from '@elements';
import useTranslation from 'utils/hooks/useTranslation';
import { ContactButton } from '../../../shared/contactButton';
import { useTheme } from 'utils/context/ThemeContext';
import { inDevEnvironment } from 'utils/in-dev-mode';

const POPOVER_OFFSET = 10;

export default function Navbar() {
  const router = useRouter();
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'inovex-elements-theme-dark';

  function isRouteActive(mainRouteUrl: string, mainRouteName: string) {
    const pathSplit = router.pathname.split('/');
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
              name={t(`common.navigation.${key}.name`)}
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
                      `common.navigation.${key}.subroutes.${subRouteName}.name`,
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
      {/* TODO: add a toggle Icon with Sun & Moon icons for light and dark mode toggle */}
      {inDevEnvironment && (
      <InoSwitch checked={isDarkMode} onCheckedChange={toggleTheme}></InoSwitch>
    )}
    </nav>
  );
}
