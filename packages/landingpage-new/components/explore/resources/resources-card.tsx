import React from 'react';
import styles from './resources-card.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import linkIcon from './assets/link-icon.svg';
import useTranslation from 'utils/hooks/useTranslation';
import classNames from 'classnames';

type Resource = {
  id: number;
  blog_url: string;
  blog_img_url: string;
  blog_title: string;
  blog_author: string;
};

function ResourceCard() {
  const { t, locale } = useTranslation();

  console.log('locale', locale);
  const cards: Resource[] = [
    {
      id: 1,
      blog_url:
        locale === 'de'
          ? // URL for this exact blog post currently only has `de` URL. May change in future and keep its functionality
            'https://www.inovex.de/de/blog/inovex-elements-open-source/'
          : 'https://www.inovex.de/en/blog/inovex-elements-open-source/',
      blog_img_url:
        'https://www.inovex.de/wp-content/uploads/2020/09/inovex-elements-1500x880.png',
      blog_title:
        'Announcing @inovex.de/elements 1.0: Our Open Source UI Library!',
      blog_author: 'Patrick Hillert / 30.09.2020',
    },
    {
      id: 2,
      blog_url:
        locale === 'de'
          ? 'https://www.inovex.de/de/training/web-components/inhouse/'
          : 'https://www.inovex.de/en/training/web-components/inhouse/',
      blog_img_url:
        'https://www.inovex.de/wp-content/uploads/2021/05/web-components.png',
      blog_title: 'inovex Academy: Web Components',
      blog_author: 'Auf Anfrage / 2 Tage Training',
    },
  ];

  return (
    <>
      <h1 className="header-d3">
        <b>{t('resources.title_1')}</b> {t('resources.title_2')}
      </h1>
      <p>{t('resources.subtitle')}</p>
      <div className={styles.row}>
        {cards.map((card) => (
          <Link href={card.blog_url} target="_blank">
            <div key={card.id} className={styles.card}>
              <div className={styles.header}>
                <Image
                  width={213}
                  height={124}
                  className={styles.Image}
                  src={card.blog_img_url}
                  alt={`${t('resources.alt_image')} ${card.blog_title}`}
                />
              </div>
              <div className={classNames(styles.content, 'body-s')}>
                <div>
                  <b>{card.blog_author}</b>
                </div>
              </div>
              <div className={classNames(styles.footer, 'title-l')}>
                {card.blog_title}
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
