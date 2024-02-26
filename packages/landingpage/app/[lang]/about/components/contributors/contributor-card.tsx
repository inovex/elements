import { FunctionComponent } from 'react';
import styles from './contributor-card.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Card from 'components/shared/card';
import classNames from 'classnames';
import { InoChip } from '@elements';

interface Props {
  role: string;
  username: string;
  avatarUrl: string;
  profileLink: string;
  isInactive?: boolean;
}

const ContributorsCard: FunctionComponent<Props> = ({
  role,
  username,
  avatarUrl,
  profileLink,
  isInactive,
}) => (
  <Card
    cardClassName={styles.contributorCard}
    header={
      <div className={styles.avatarContainer}>
        <Image
          className={styles.Image}
          src={avatarUrl}
          width={100}
          height={100}
          alt={`Avatar of ${username}`}
        />
        {isInactive && (
          <InoChip clickable={false} className={styles.statusChip}>
            Inactive
          </InoChip>
        )}
      </div>
    }
    headerClassName={classNames(styles.center, 'body-l')}
    content={
      <Link href={profileLink} target="_blank">
        {username}
      </Link>
    }
    contentClassName={styles.center}
    footer={<div className={classNames(styles.role, 'body-s')}>{role}</div>}
    footerClassName={styles.footer + ' ' + styles.center}
  />
);

export default ContributorsCard;
