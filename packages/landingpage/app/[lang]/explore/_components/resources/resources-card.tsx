import React, { useEffect, useState } from 'react';
import styles from './resources-card.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import linkIcon from './assets/link-icon.svg';
import classNames from 'classnames';
import { useTranslation } from '@hooks/useTranslation';

type Resource = {
  date: string;
  url: string;
  img_url: string;
  title: string;
  author: string;
};

function ResourceCard() {
  const { t } = useTranslation();
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    setResources([
      {
        url: t('explore.articles.announcement-v1.url'),
        img_url: 'https://www.inovex.de/wp-content/uploads/2020/09/inovex-elements-1500x880.png',
        title: t('explore.articles.announcement-v1.title'),
        author: t('explore.articles.announcement-v1.author'),
        date: t('explore.articles.announcement-v1.date'),
      },
      {
        url: t('explore.articles.trainings.url'),
        img_url: 'https://www.inovex.de/wp-content/uploads/2021/05/web-components.png',
        title: t('explore.articles.trainings.title'),
        author: t('explore.articles.trainings.author'),
        date: t('explore.articles.trainings.date'),
      },
      {
        url: t('explore.articles.monorepo-comparison.url'),
        img_url: 'https://www.inovex.de/wp-content/uploads/Frontend-Monorepo-Frameworks-1500x880.png',
        title: t('explore.articles.monorepo-comparison.title'),
        author: t('explore.articles.monorepo-comparison.author'),
        date: t('explore.articles.monorepo-comparison.date'),
      },
    ]);
  }, [t]);

  return (
    <>
      <h1 className="header-d3">
        <b>{t('explore.resources.title_1')}</b> {t('explore.resources.title_2')}
      </h1>
      <p>{t('explore.resources.subtitle')}</p>
      <div className={styles.row}>
        {resources.map(resource => (
          <Link href={resource.url} target="_blank" key={resource.url}>
            <div className={styles.card}>
              <div className={styles.header}>
                <div className={styles.imageContainer}>
                  <Image
                    className={styles.Image}
                    src={resource.img_url}
                    alt={`${t('explore.resources.alt_image')} ${resource.title}`}
                    fill
                  />
                </div>
              </div>
              <div className={classNames(styles.content, 'body-s')}>
                <div>
                  <b>{resource.author}</b> / <b>{resource.date}</b>
                </div>
              </div>
              <div className={classNames(styles.footer, 'title-l')}>{resource.title}</div>
              <div className={styles.linkIcon}>
                <Image width={18} height={18} src={linkIcon} alt="link-icon" />
              </div>
            </div>
          </Link>
        ))}

        <div className={styles.sampleCard}>
          <div className={classNames(styles.header, 'title-l')}>{t('explore.resources.sample_title')}</div>
          <div className={classNames(styles.content, 'body-s')}>
            <b>{t('explore.resources.sample_subtitle')}</b>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResourceCard;
