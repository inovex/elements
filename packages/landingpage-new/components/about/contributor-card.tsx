import { FunctionComponent } from 'react';
import styles from './contributor-card.module.scss';
import Card from '../shared/card';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  role: string;
  username: string;
  avatarUrl: string;
  profileLink: string;
}

const ContributorsCard: FunctionComponent<Props> = ({
  role,
  username,
  avatarUrl,
  profileLink,
}) => (
  <Card
    cardClassName={styles.contributorCard}
    header = {
      <Image
        className={styles.Image}
        src={avatarUrl}
        width={100}
        height={100}
        alt={`Avatar of ${username}`}
      />
    }
    headerClassName={styles.center}
    content={
      <Link href={profileLink} target="_blank">
        {username}
      </Link>
    }
    contentClassName={styles.center}
    footer={
        <div className={styles.role}>{role}</div>
    }
    footerClassName={styles.footer + ' ' + styles.center}
  />
);

export default ContributorsCard;
