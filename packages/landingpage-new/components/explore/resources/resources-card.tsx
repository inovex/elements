import React from 'react';
import styles from './resources-card.module.scss';
import Image from 'next/image';
import Link from 'next/link';

type Resource = {
  id: number;
  blog_url: string;
  blog_img_url: string;
  blog_title: string;
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
      blog_url: 'https://www.inovex.de/en/about-us/open-source/',
      blog_img_url:
        'https://www.inovex.de/wp-content/uploads/2020/09/inovex-elements-1500x880.png',
      blog_title: 'One more Article or anything?',
      blog_author: 'Content Creator / 30.09.2020',
    },
  ];

  return (
    <>
      <h1 className="header-d3">
        the <b>Resources</b>
      </h1>
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
