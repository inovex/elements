import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { LangContext } from 'types/langContext';
import { getLocalizationProps } from 'utils/context/LanguageContext';
import useTranslation from 'utils/hooks/useTranslation';

const Docs: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t('title')}</h1>
      <iframe
        src="https://elements.inovex.de/version/v7.1.2/?path=/story/docs-welcome--page"
        style={{
          position: 'absolute',
          left: 0,
          top: 120,
          height: 'calc(100vh - 120px)', // 120px = Navbar height
          width: '100%',
          border: 'none',
        }}
      ></iframe>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx as LangContext, 'library');
  return {
    props: {
      localization,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: ['en', 'de'].map((lang) => ({ params: { lang } })),
  fallback: false,
});

export default Docs;