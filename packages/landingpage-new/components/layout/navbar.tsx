import { useRouter } from 'next/router';
import styles from './navbar.module.scss';
import { Routes } from '../../utils/routes';
import LinkItem from './linkItem';
import { InoPopover } from '@elements';
import useTranslation from 'utils/hooks/useTranslation';
import { ContactButton } from '../shared/contactButton';

const POPOVER_OFFSET = -46;

export default function Navbar() {
  const router = useRouter();
  const { t } = useTranslation();

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
          <InoPopover
            for={key}
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
                name={t(`common.navigation.${key}.name`)}
                isActive={isRouteActive(mainRouteUrl, key)}
                noMargin={true}
              />
              {subRoutes.map(({ key: subRouteName, url: subRouteUrl }) => (
                <LinkItem
                  key={subRouteUrl}
                  url={subRouteUrl}
                  name={t(
                    `common.navigation.${key}.subroutes.${subRouteName}.name`
                  )}
                  isDense={true}
                />
              ))}
            </div>
          </InoPopover>
        </div>
      ))}
      <ContactButton />
    </nav>
  );
}
