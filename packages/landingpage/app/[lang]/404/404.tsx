'use client';

import Link from 'next/link';
import Image from 'next/image';
import { InoButton } from '@inovex.de/elements-react';
import img404 from '@assets/404.svg';
import styles from './404.module.scss';
import { useTranslation } from '../../../utils/hooks/useTranslation';

export default function Page404() {
  const { t, lang } = useTranslation();

  return (
    <div className={styles.container}>
      <Image src={img404} alt="404 error image" width={300} height={300} />
      <p className="body-l">{t('common.404.description')}</p>
      <Link href={`/${lang}`}>
        <InoButton>
          <span>{t('common.404.button')}</span>
        </InoButton>
      </Link>
    </div>
  );
}
