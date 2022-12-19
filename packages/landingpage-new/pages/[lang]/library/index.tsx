import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { LangContext } from 'types/langContext';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from 'utils/context/staticPaths';
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

export const getStaticProps: GetStaticProps = async (ctx) => getStaticLanguageProps(ctx as LangContext, 'library');
export const getStaticPaths: GetStaticPaths = async () => getStaticLanguagePaths();

export default Docs;
