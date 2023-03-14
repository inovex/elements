import Link from 'next/link';
import styles from './404.module.scss';
import { InoButton } from '@elements';
import useTranslation from 'utils/hooks/useTranslation';
import {GetStaticPaths, GetStaticProps} from 'next/types';
import {getStaticLanguagePaths, getStaticLanguageProps} from 'utils/context/staticPaths';
import {LangContext} from 'types/langContext';
import {Locale_File} from 'translations/types';
import {NextPage} from 'next';
import Image from 'next/image';
import img404 from '@assets/404.svg';

const Custom404: NextPage = () => {
  const {t, locale} = useTranslation();

  return (
    <div className={styles.container}>
      <Image src={img404} alt="404 error image" width={300} height={300} />
      <p className="body-l">
        {t('common.404.description')}
      </p>
      <Link href={`/${locale}`}>
        <InoButton><span>{t('common.404.button')}</span></InoButton>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) =>
  getStaticLanguageProps(ctx as LangContext, Locale_File.COMMON);
export const getStaticPaths: GetStaticPaths = async () =>
  getStaticLanguagePaths();

export default Custom404;
