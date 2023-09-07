import useTranslation from 'utils/hooks/useTranslation';
import styles from './kpi-section.module.scss';
import classNames from 'classnames';
import { useRef } from 'react';
import { CountUp } from 'countup.js';
import { useMount } from 'react-use';

interface KPIitem {
  id: number;
  title: string;
  target_value: number;
  suffix: string;
}

export default function KPIsection() {
  const { t } = useTranslation();
  const KPIs: KPIitem[] = t('kpi.kpis');

  const countupRefs = useRef<Array<HTMLDivElement | null>>([]);

  useMount(() => {
    initCountUp();
  });

  // dynamically import and initialize countUp, sets value of `countUpAnim`
  // you don't have to import this way, but this works best for next.js
  function initCountUp() {
    KPIs.forEach((kpi, i) => {
      if (kpi === null) {
        return;
      }
      const options = {
        duration: 3,
        prefix: '',
        suffix: kpi.suffix ? kpi.suffix : '',
        enableScrollSpy: true,
        scrollSpyOnce: true,
      };
      const countUpAnim = new CountUp(
        countupRefs.current[i] as HTMLDivElement,
        kpi.target_value,
        options
      );
      countUpAnim.start();
    });
  }

  return (
    <>
      <div className={styles.header_container}>
        <h1 className={classNames(styles.header, 'header-d2')}>
          <b>{t('kpi.title_1')}</b>
          {t('kpi.title_2')}
        </h1>
      </div>
      <div className={classNames(styles.subheader, 'body-l')}>
        <p>{t('kpi.subheader')}</p>
      </div>
      <div className={styles.kpi_wrapper}>
        {KPIs.map((kpi, i) => {
          return (
            <div key={kpi.id} className={styles.kpi_container}>
              <b>
                <h1
                  className={classNames(styles.kpi_number, 'header-d2')}
                  ref={(kpi) => (countupRefs.current[i] = kpi)}
                ></h1>
              </b>
              <div className={'title-s'}>{kpi.title}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
