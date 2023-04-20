import useTranslation from 'utils/hooks/useTranslation';
import styles from './kpi-section.module.scss';
import CountUp from './CountUp';

interface KPIitem {
    id: number;
    title: string;
    target_value: number,
    suffix: string,
}

export default function KPIsection () {
    const { t } = useTranslation();
    const KPIs: KPIitem[] = t('kpi.kpis');
    
    return (
        <>
            <h1>
                <b>{t('kpi.title_1')}</b>
            </h1>
            <h1>
                {t('kpi.title_2')}
            </h1>
            <div className={styles.subheader}>
                {t('kpi.subheader')}
            </div>
            <div className={styles.kpi_wrapper}>
                {KPIs.map((kpi)=> {
                    return (
                        <div key={kpi.id} className={styles.kpi_container}>
                            <CountUp count={kpi.target_value} duration={2000} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}