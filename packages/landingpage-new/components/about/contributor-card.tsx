import { FunctionComponent } from 'react';
import styles from './contributor-card.module.scss';
import Card from '../shared/card';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'hooks/useTranslation';

interface Props {
  username: string;
  avatarUrl: string;
  profileLink: string;
}

const ContributorsCard: FunctionComponent<Props> = ({
  username,
  avatarUrl,
  profileLink,
}) => {
  const { t, locale } = useTranslation();
  return (
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
          {username + t('title1')}
        </Link>
      }
    />
  );
};

export default ContributorsCard;
