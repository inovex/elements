import React, { useState } from 'react';
import styles from './resources-card.module.scss';
import Card, { Props } from 'components/shared/card';
import Image from 'next/image';
import Link from 'next/link';

function ResourceCard() {
  const [cards] = useState([
    {
      id: 1,
      blog_url: 'https://www.inovex.de/de/blog/inovex-elements-open-source/',
      blog_img_url:
        'https://www.inovex.de/wp-content/uploads/2020/09/inovex-elements-1500x880.png',
      blog_name:
        'Announcing @inovex.de/elements 1.0: Our Open Source UI Library!',
      ressource_type: 'Blog',
    },
    {
      id: 2,
      blog_url:
        'https://www.inovex.de/en/about-us/open-source/',
      blog_img_url: 'https://www.inovex.de/wp-content/uploads/inovex-elements-logo-452x304.jpg',
      blog_name:
        'Open-Source Software from inovex',
      ressource_type: 'Article',
    },
  ]);

  return (
    <div className={styles.row}>
      {cards.map((card) => {
        const props: Props = {
          header: (
            <Link href={card.blog_url}>
              <Image
                width={250}
                height={100}
                className={styles.Image}
                src={card.blog_img_url}
                alt={`blog image of ${card.blog_name}`}
              />
            </Link>
          ),
          content: (
            <Link href={card.blog_url}>
              <div className={styles.header}>{card.blog_name}</div>
            </Link>
          ),
          contentClassName: styles.title,
          footer: <>{card.ressource_type}</>,
          footerClassName: styles.footer,
        };

        return <Card key={card.id} {...props} />;
      })}
    </div>
  );
}

export default ResourceCard;