import React, { ReactNode } from 'react';
import styles from './resources-card.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import linkIcon from './assets/link-icon.svg';

type Resource = {
  id: number;
  blog_url: string;
  blog_img_url: string;
  blog_title: string | ReactNode;
  blog_author: string;
};

function ResourceCard() {
  const cards: Resource[] = [
    {
      id: 1,
      blog_url: 'https://www.inovex.de/de/blog/inovex-elements-open-source/',
      blog_img_url:
        'https://www.inovex.de/wp-content/uploads/2020/09/inovex-elements-1500x880.png',
      blog_title:
        'Announcing @inovex.de/elements 1.0: Our Open Source UI Library!',
      blog_author: 'Patrick Hillert / 30.09.2020',
    },
    {
      id: 2,
      blog_url: 'https://www.inovex.de/de/training/web-components/inhouse/',
      blog_img_url:
        'https://www.inovex.de/wp-content/uploads/2021/05/web-components.png',
      blog_title: (
        <div>
          inovex Academy:<br></br>
          Web Components
        </div>
      ),
      blog_author: 'Auf Anfrage / 2 Tage Training',
    },
  ];

  return (
    <>
      <h1 className="header-d3">
        <b>more</b> information?
      </h1>
      <p>Every now and then we report about new stuff.</p>
      <div className={styles.row}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.header}>
              <Link href={card.blog_url}>
                <Image
                  width={213}
                  height={124}
                  className={styles.Image}
                  src={card.blog_img_url}
                  alt={`blog image of ${card.blog_title}`}
                />
              </Link>
            </div>
            <div className={styles.content}>
              <Link href={card.blog_url}>
                <div>{card.blog_author}</div>
              </Link>
            </div>
            <Link href={card.blog_url}>
              <div className={styles.footer}>{card.blog_title}</div>
            </Link>
            <div className={styles.linkIcon}>
            <Link href={card.blog_url}>
              <Image
                width={18}
                height={18}
                src={linkIcon}
                alt="link-icon"
              />
              </Link>
            </div>
          </div>
        ))}

        <div className={styles.card}>
          <div className={styles.header}>
            We are always
            <br /> evolving!
          </div>
          <div className={styles.content} style={{ color: '#000E88' }}>
            Stay tuned for more elements content!
          </div>
        </div>
      </div>
    </>
  );
}

export default ResourceCard;
