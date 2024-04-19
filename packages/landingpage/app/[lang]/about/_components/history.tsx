import styles from './history.module.scss';
import Milestone from './milestone';
import { useTranslation } from '@hooks/useTranslation';

function History() {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="header-d3">
        {t('about.history.title_1')} <b>{t('about.history.title_2')}</b>
      </h1>
      <div className={styles.container}>
        <Milestone
          title={t('about.history.milestones.proof_of_concept.title')}
          subtitle={t('about.history.milestones.proof_of_concept.date')}
          position="left"
        >
          {t('about.history.milestones.proof_of_concept.description')}
        </Milestone>
        <Milestone
          title={t('about.history.milestones.getting_started.title')}
          subtitle={t('about.history.milestones.getting_started.date')}
          position="right"
        >
          <div>
            {t('about.history.milestones.getting_started.description_1')}{' '}
            <a href="https://m3.material.io/develop/web" target="_blank" rel="noreferrer">
              Google Material Web
            </a>
            ,{' '}
            <a href="https://flatpickr.js.org/" target="_blank" rel="noreferrer">
              flatpickr
            </a>
            {t('about.history.milestones.getting_started.description_2')}
          </div>
        </Milestone>
        <Milestone
          title={t('about.history.milestones.first_internal.title')}
          subtitle={t('about.history.milestones.first_internal.date')}
          position="left"
        >
          {t('about.history.milestones.first_internal.description')}
        </Milestone>
        <Milestone
          title={t('about.history.milestones.learning.title')}
          subtitle={t('about.history.milestones.learning.date')}
          position="right"
        >
          {t('about.history.milestones.learning.description')}
        </Milestone>
        <Milestone
          title={t('about.history.milestones.first_external.title')}
          subtitle={t('about.history.milestones.first_external.date')}
          position="left"
        >
          {t('about.history.milestones.first_external.description')}
        </Milestone>
        <Milestone
          title={t('about.history.milestones.open_source.title')}
          subtitle={t('about.history.milestones.open_source.date')}
          position="right"
        >
          <div>
            <mark>{t('about.history.milestones.open_source.mark')}</mark>{' '}
            {t('about.history.milestones.open_source.description_1')}{' '}
            <a href="https://www.npmjs.com/package/@inovex.de/elements" target="_blank" rel="noreferrer">
              npm
            </a>{' '}
            {t('about.history.milestones.open_source.description_2')}{' '}
            <a href="https://github.com/inovex/elements" target="_blank" rel="noreferrer">
              GitHub
            </a>{' '}
            {t('about.history.milestones.open_source.description_3')}
          </div>
        </Milestone>
        <Milestone
          title={t('about.history.milestones.optimizing.title')}
          subtitle={t('about.history.milestones.optimizing.date')}
          position="left"
        >
          <div>
            {t('about.history.milestones.optimizing.description_1')}{' '}
            <a href="https://github.com/inovex/elements#contributing" target="_blank" rel="noreferrer">
              {t('about.history.milestones.optimizing.description_2')}
            </a>{' '}
            {t('about.history.milestones.optimizing.description_3')}
          </div>
        </Milestone>
      </div>
    </>
  );
}

export default History;
