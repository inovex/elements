import useTranslation from 'utils/hooks/useTranslation';
import styles from './history.module.scss';
import Milestone from './milestone';

function History() {
  const { t } = useTranslation();
  return (
    <>
      <h1 className={styles.header}>
        {t('history.title_1')} <b>{t('history.title_2')}</b>
      </h1>
      <div className={styles.container}>
        <Milestone
          title={t('history.milestones.proof_of_concept.title')}
          subtitle={t('history.milestones.proof_of_concept.date')}
          position="left"
        >
          {t('history.milestones.proof_of_concept.description')}
        </Milestone>
        <Milestone
          title={t('history.milestones.getting_started.title')}
          subtitle={t('history.milestones.getting_started.date')}
          position="right"
        >
          <div>
            {t('history.milestones.getting_started.description_1')}{' '}
            <a
              href="https://m3.material.io/develop/web"
              target="_blank"
              rel="noreferrer"
            >
              Google Material Web
            </a>
            ,{' '}
            <a
              href="https://flatpickr.js.org/"
              target="_blank"
              rel="noreferrer"
            >
              flatpickr
            </a>
            {t('history.milestones.getting_started.description_2')}
          </div>
        </Milestone>
        <Milestone
          title={t('history.milestones.first_internal.title')}
          subtitle={t('history.milestones.first_internal.date')}
          position="left"
        >
          {t('history.milestones.first_internal.description')}
        </Milestone>
        <Milestone
          title={t('history.milestones.learning.title')}
          subtitle={t('history.milestones.learning.date')}
          position="right"
        >
          {t('history.milestones.learning.description')}
        </Milestone>
        <Milestone
          title={t('history.milestones.first_external.title')}
          subtitle={t('history.milestones.first_external.date')}
          position="left"
        >
          {t('history.milestones.first_external.description')}
        </Milestone>
        <Milestone
          title={t('history.milestones.open_source.title')}
          subtitle={t('history.milestones.open_source.date')}
          position="right"
        >
          <div>
            <mark>{t('history.milestones.open_source.mark')}</mark>{' '}
            {t('history.milestones.open_source.description_1')}{' '}
            <a
              href="https://www.npmjs.com/package/@inovex.de/elements"
              target="_blank"
              rel="noreferrer"
            >
              npm
            </a>{' '}
            {t('history.milestones.open_source.description_2')}{' '}
            <a
              href="https://github.com/inovex/elements"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{' '}
            {t('history.milestones.open_source.description_3')}
          </div>
        </Milestone>
        <Milestone
          title={t('history.milestones.optimizing.title')}
          subtitle={t('history.milestones.optimizing.date')}
          position="left"
        >
          <div>
            {t('history.milestones.optimizing.description_1')}{' '}
            <a
              href="https://github.com/inovex/elements#contributing"
              target="_blank"
              rel="noreferrer"
            >
              {t('history.milestones.optimizing.description_2')}
            </a>{' '}
            {t('history.milestones.optimizing.description_3')}
          </div>
        </Milestone>
      </div>
    </>
  );
}

export default History;
