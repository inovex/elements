import React, { useEffect, useState } from 'react';
import styles from './resources-card.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import linkIcon from './assets/link-icon.svg';
import useTranslation from 'utils/hooks/useTranslation';
import classNames from 'classnames';

type Resource = {
  date: string;
  url: string;
  img_url: string;
  title: string;
  author: string;
};

function ResourceCard() {
  const { t, locale } = useTranslation();
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    setResources([
      {
        url: t('articles.announcement-v1.url'),
        img_url:
          'https://www.inovex.de/wp-content/uploads/2020/09/inovex-elements-1500x880.png',
        title: t('articles.announcement-v1.title'),
        author: t('articles.announcement-v1.author'),
        date: t('articles.announcement-v1.date'),
      },
      {
        url: t('articles.trainings.url'),
        img_url:
          'https://www.inovex.de/wp-content/uploads/2021/05/web-components.png',
        title: t('articles.trainings.title'),
        author: t('articles.trainings.author'),
        date: t('articles.trainings.date'),
      },
    ]);
  }, [locale]);

  return (
    <>
      <h1 className="header-d3">
        <b>{t('resources.title_1')}</b> {t('resources.title_2')}
      </h1>
      <p>{t('resources.subtitle')}</p>
      <div className={styles.row}>
        {resources.map((resource) => (
          <Link href={resource.url} target="_blank" key={resource.url}>
            <div className={styles.card}>
              <div className={styles.header}>
                <Image
                  width={213}
                  height={124}
                  className={styles.Image}
                  src={resource.img_url}
                  alt={`${t('resources.alt_image')} ${resource.title}`}
                />
              </div>
              <div className={classNames(styles.content, 'body-s')}>
                <div>
                  <b>{resource.author}</b> / <b>{resource.date}</b>
                </div>
              </div>
              <div className={classNames(styles.footer, 'title-l')}>
                {resource.title}
              </div>
              <div className={styles.linkIcon}>
                <Image width={18} height={18} src={linkIcon} alt="link-icon" />
              </div>
            </div>
          </Link>
        ))}

        <div className={styles.sampleCard}>
          <div className={classNames(styles.header, 'title-l')}>
            {t('resources.sample_title')}
          </div>
          <div className={classNames(styles.content, 'body-s')}>
            <b>{t('resources.sample_subtitle')}</b>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResourceCard;
