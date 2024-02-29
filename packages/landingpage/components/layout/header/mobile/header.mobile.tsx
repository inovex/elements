import styles from './header.mobile.module.scss';
import { useClickAway, useToggle } from 'react-use';
import classNames from 'classnames';
import { SVGProps, useEffect, useRef, useState } from 'react';
import elementsLogo from '@assets/elements.svg';
import Image from 'next/image';
import { InoIcon } from '@inovex.de/elements-react';
import { Routes } from '../../../../utils/routes';
import LinkItem from '../../linkItem';
import { usePathname, useRouter } from 'next/navigation';
import ContactButton from '../../../shared/contactButton';
import VersionSelect from 'components/shared/versionSelect';
import { useTranslation } from '@hooks/useTranslation';

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={26}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={24} height={4} rx={2} />
    <rect y={11} width={24} height={4} rx={2} />
    <rect y={22} width={24} height={4} rx={2} />
  </svg>
);

export default function HeaderMobile() {
  const ref = useRef(null);
  const [menuIsOpen, toggleMenu] = useToggle(false);
  const [expandedSubMenu, expandSubMenu] = useState<string | null>(null);
  const { t } = useTranslation();
  const router = useRouter();
  const pathName = usePathname();
  const isLibraryPage = pathName.endsWith('/library/components');

  /*
  ToDO!
  useEffect(() => {
    const handleRouteChange = () => {
      toggleMenu(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events, toggleMenu]);
  // */

  useClickAway(ref, () => toggleMenu(false));
  useEffect(() => expandSubMenu(null), [menuIsOpen]);

  return (
    <>
      <div className={styles.menuIconContainer}>
        <MenuIcon className={styles.icon} onClick={toggleMenu} />
        {isLibraryPage && <VersionSelect />}
      </div>
      <div
        ref={ref}
        className={classNames({
          [styles.menu]: true,
          [styles.menuOpen]: menuIsOpen,
        })}
      >
        <Image
          src={elementsLogo}
          alt={'elements logo'}
          width={40}
          height={40}
        />
        <div className={styles.routes}>
          {Routes.map(
            ({ key: mainRouteName, url: mainRouteUrl, subRoutes }) => {
              const routeIsExpanded = expandedSubMenu === mainRouteName;

              return (
                <div key={mainRouteName}>
                  <div className={styles.menuItem}>
                    <LinkItem
                      url={mainRouteUrl}
                      noMargin={true}
                      name={t(`common.navigation.${mainRouteName}.name` as LocaleResourcePaths)}
                    />
                    <InoIcon
                      icon={routeIsExpanded ? 'arrow_up' : 'arrow_down'}
                      onClick={() =>
                        expandSubMenu(routeIsExpanded ? null : mainRouteName)
                      }
                    />
                  </div>
                  <div
                    className={classNames({
                      [styles.subRoutes]: true,
                      [styles.subRoutesExpanded]: routeIsExpanded,
                    })}
                  >
                    {subRoutes.map((route) => (
                      <LinkItem
                        key={route.url}
                        url={route.url}
                        name={t(
                          `common.navigation.${mainRouteName}.subroutes.${route.key}.name` as LocaleResourcePaths,
                        )}
                        isDense={true}
                      />
                    ))}
                  </div>
                </div>
              );
            },
          )}
        </div>
        <ContactButton />
      </div>
    </>
  );
}
