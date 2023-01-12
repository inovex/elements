import { useRouter } from 'next/router';
import styles from './navbar.module.scss';
import { MainRoutes, Routes, SubRoutes } from '../../utils/routes';
import LinkItem from './linkItem';
import { InoButton, InoPopover } from '@elements';
import Link from 'next/link';

const POPOVER_OFFSET = -46;

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      {Routes.map(({ name: mainRouteName, url: mainRouteUrl, subRoutes }) => (
        <div key={mainRouteUrl}>
          <div id={mainRouteUrl}>
            <LinkItem
              url={mainRouteUrl}
              name={mainRouteName}
              isActive={router.pathname === mainRouteUrl}
            />
          </div>
          <InoPopover
            for={mainRouteUrl}
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
                name={mainRouteName}
                isActive={router.pathname === mainRouteUrl}
                noMargin={true}
              />
              {subRoutes.map(({ name: subRouteName, url: subRouteUrl }) => {
                const subrouteDivider =
                  mainRouteName === 'getting started' ? '/' : '#';
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
          </InoPopover>
        </div>
      ))}
      <Link href={MainRoutes.HOME + '#' + SubRoutes.HOME_CONTACT}>
        <InoButton>Contact us</InoButton>
      </Link>
    </nav>
  );
}
