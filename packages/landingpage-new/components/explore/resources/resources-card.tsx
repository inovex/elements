import React, { useState } from 'react';
import styles from './resources-card.module.scss';
import Card, { Props } from 'components/shared/card';
import Image from 'next/image';
import Link from 'next/link';

function ResourceCard() {
  const [cards] = useState([
    /*Example Card Content*/
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
        'https://www.inovex.de/de/blog/moderne-produktentwicklung-braucht-gemeinsames-design-und-entwicklung/',
      blog_img_url: 'https://www.inovex.de/wp-content/uploads/2020/12/test.png',
      blog_name:
        'Moderne Produktentwicklung braucht gemeinsames Design und Entwicklung',
      ressource_type: 'Article',
    },

    {
      id: 3,
      blog_url:
        'https://www.inovex.de/de/blog/state-of-the-web-september-2019/',
      blog_img_url:
        'https://www.inovex.de/wp-content/uploads/2019/08/state-of-the-web-1-1500x880.png',
      blog_name: 'State of the Web September 2019: Start here',
      ressource_type: 'Case Study',
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