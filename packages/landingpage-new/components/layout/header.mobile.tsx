import styles from './header.mobile.module.scss';
import MenuIcon from './menuIcon';
import {useClickAway, useToggle} from 'react-use';
import classNames from 'classnames';
import {useRef, useState} from 'react';
import elementsLogo from '@assets/elements.svg';
import Image from 'next/image';
import {InoButton, InoIcon, InoList} from '@elements';
import {Routes} from '../../utils/routes';
import LinkItem from './linkItem';
import useTranslation from '../../utils/hooks/useTranslation';

export default function HeaderMobile() {
  const ref = useRef(null);
  const [menuIsOpen, toggleMenu] = useToggle(false);
  const [expandedSubMenu, expandSubMenu] = useState<string | null>(null);
  const {t} = useTranslation();

  useClickAway(ref, () => toggleMenu(false));

  return (
    <>
      <MenuIcon className={styles.icon} onClick={toggleMenu}/>
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
          height={48}
        />
        <div className={styles.routes}>
          {Routes.map(
            ({key: mainRouteName, url: mainRouteUrl, subRoutes}) => {
              const routeIsExpanded = expandedSubMenu === mainRouteName;

              return (
                <div key={mainRouteName} >
                  <div className={styles.menuItem}>
                    <LinkItem
                      url={mainRouteUrl}
                      name={t(`common.navigation.${mainRouteName}.name`)}
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
                  {(
                    subRoutes.map(route => (
                      <LinkItem
                        key={route.url}
                        url={route.url}
                        name={t(`common.navigation.${mainRouteName}.subroutes.${route.key}.name`)}
                        isDense={true}
                      />
                    ))
                  )}
                  </div>
                </div>
              );
            }
          )}
        </div>
        <InoButton>Contact us</InoButton>
      </div>
    </>
  );
}
