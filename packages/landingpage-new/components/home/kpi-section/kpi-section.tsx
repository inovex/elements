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

    const countupRefs = useRef<Array<HTMLDivElement | null>>([]);
    let countUpAnim;
    
    useEffect(() => {
        initCountUp();
    }, []);
    
    // dynamically import and initialize countUp, sets value of `countUpAnim`
    // you don't have to import this way, but this works best for next.js
    async function initCountUp() {
        const countUpModule = await import('countup.js');
        KPIs.forEach((kpi, i)=> {
            if(kpi === null){
                return
            }
            const options = {
                duration: 3,
                prefix: '',
                suffix: kpi.suffix? kpi.suffix : '',
                enableScrollSpy: true,
                scrollSpyOnce: true,
            }
            countUpAnim = new countUpModule.CountUp(countupRefs.current[i] as HTMLDivElement, kpi.target_value,  options);
            if (!countUpAnim.error) {
                countUpAnim.start();
            } else {
            console.error(countUpAnim.error);
            }
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
            <div className={styles.subheader}>
                {t('kpi.subheader')}
            </div>
            <div className={styles.kpi_wrapper}>
                {KPIs.map((kpi, i) => {
                    return (
                        <div key={kpi.id} className={styles.kpi_container}>
                            <b>
                                <h1 className={classNames(styles.kpi_number, 'header-d2')} ref={kpi => countupRefs.current[i] = kpi}></h1>
                            </b>
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