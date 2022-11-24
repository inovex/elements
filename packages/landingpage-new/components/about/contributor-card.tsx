import { FunctionComponent } from 'react';
import styles from './contributor-card.module.scss';
import Card from '../shared/card';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  username: string;
  avatarUrl: string;
  profileLink: string;
}

const ContributorsCard: FunctionComponent<Props> = ({
  username,
  avatarUrl,
  profileLink,
}) => (
  <Card
    cardClassName={styles.contributorCard}
    content={
      <Image
        className={styles.Image}
        src={avatarUrl}
        width={100}
        height={100}
        alt={`Avatar of ${username}`}
      />
    }
    footerClassName={styles.footer}
    footer={
      <Link href={profileLink} target="_blank">
        {username}
      </Link>
    }
  />
);

export default ContributorsCard;
