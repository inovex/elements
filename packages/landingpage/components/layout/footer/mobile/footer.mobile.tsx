import styles from './footer.mobile.module.scss';
import { Routes } from '../../../../utils/routes';
import LinkItem from '../../linkItem';
import useTranslation from 'utils/hooks/useTranslation';
import { InoAccordion } from '@inovex.de/elements-react';
import { useSet } from 'react-use';

export default function FooterMobile() {
  const [_, { has, toggle }] = useSet(new Set<string>());
  const { t } = useTranslation();

  return (
    <div className={styles.accordionWrapper}>
      {Routes.map(({ key: mainRouteName, url: mainRouteUrl, subRoutes }) => (
        <div key={mainRouteUrl} className={styles.accordion}>
          <InoAccordion
            accordionTitle={t(`common.navigation.${mainRouteName}.name`)}
            expanded={has(mainRouteUrl)}
            onExpandedChange={() => toggle(mainRouteUrl)}
          >
            {subRoutes.map(({ key: subRouteName, url: subRouteUrl }) => (
              <LinkItem
                key={subRouteUrl}
                url={subRouteUrl}
                name={t(
                  `common.navigation.${mainRouteName}.subroutes.${subRouteName}.name`,
                )}
                isDense={true}
                className={styles.subRouteName}
              />
            ))}
          </InoAccordion>
        </div>
      ))}
    </div>
  );
}
