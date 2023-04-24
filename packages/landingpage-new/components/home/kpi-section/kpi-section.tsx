import useTranslation from 'utils/hooks/useTranslation';
import styles from './kpi-section.module.scss';
import classNames from 'classnames';
import { useEffect, useRef } from 'react'

interface KPIitem {
    id: number;
    title: string;
    target_value: number,
    suffix: string,
}

export default function KPIsection () {
    const { t } = useTranslation();
    const KPIs: KPIitem[] = t('kpi.kpis');

    const countupRef = useRef(null);
    let countUpAnim;
    
    // useEffect with empty dependency array runs once when component is mounted
    useEffect(() => {
        initCountUp();
    }, []);

    // dynamically import and initialize countUp, sets value of `countUpAnim`
    // you don't have to import this way, but this works best for next.js
    async function initCountUp() {
        const countUpModule = await import('countup.js');
        if(countupRef.current === null){
            return
        }
        countUpAnim = new countUpModule.CountUp(countupRef.current, 1000);
        if (!countUpAnim.error) {
        countUpAnim.start();
        } else {
        console.error(countUpAnim.error);
        }
    }

    
    return (
        <>
            <div className={styles.header_container}>
                <h1 className={classNames(styles.header, 'header-d2')}>
                    <b>{t('kpi.title_1')}</b>
                </h1>
                <h1 className={classNames(styles.header, 'header-d2')}>
                    {t('kpi.title_2')}
                </h1>
            </div>
            <div className={styles.subheader}>
                {t('kpi.subheader')}
            </div>
            <div className={styles.kpi_wrapper}>
                {KPIs.map((kpi)=> {
                    return (
                        <div key={kpi.id} className={styles.kpi_container}>
                            <b><h1 className={classNames('kpi_number', 'header-d2')} ref={countupRef}></h1></b>
                            <div className={styles.kpi_title}>
                                {kpi.title}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}