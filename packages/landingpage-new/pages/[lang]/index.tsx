import { NextPage } from 'next';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import { LangContext } from 'types/langContext';
import Contact from 'components/contact/contact';
import CoreAspects from 'components/home/core-aspects/core-aspects';
import ComponentSample from 'components/home/component-sample/component-sample';
import { SubRoutes } from 'utils/routes';
import Header from 'components/home/header/header';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from 'utils/context/staticPaths';
import { Locale_File } from 'translations/types';
import Page from 'components/layout/page';
import useTranslation from 'utils/hooks/useTranslation';
import useDefaultLocale from '../../translations/useDefaultLocale';
import { useMount } from 'react-use';
import FaqSection from 'components/home/faq-section/faq-section';

const Home: NextPage = () => {
  const redirectToDefaultLocale = useDefaultLocale();
  const { t } = useTranslation();

  useMount(redirectToDefaultLocale);

  return (
    <Page title={[t('common.meta.home')]}>
      <div className="section-container">
        <section id={SubRoutes.HOME_INFO}>
          <Header></Header>
        </section>
        <section id={SubRoutes.HOME_CORE_ASPECTS}>
          <CoreAspects></CoreAspects>
        </section>
        <section id={SubRoutes.HOME_COMPONENTS}>
          <ComponentSample></ComponentSample>
        </section>
        <section id={SubRoutes.HOME_FAQ}>
        <FaqSection></FaqSection>
        </section>
        <section id={SubRoutes.HOME_CONTACT}>
          <Contact />
        </section>
      </div>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) =>
  getStaticLanguageProps(ctx as LangContext, Locale_File.HOME);
export const getStaticPaths: GetStaticPaths = async () =>
  getStaticLanguagePaths();

export default Home;
