import { getLocalizationProps } from 'utils/context/LanguageContext';
import { NextPage } from 'next';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import { LangContext } from 'types/langContext';
import Contact from 'components/contact/contact';
import styles from './home.module.scss';
import CoreAspects from 'components/home/core-aspects/core-aspects';
import ComponentSample from 'components/home/component-sample/component-sample';
import { SubRoutes } from 'utils/routes';
import Header from 'components/home/header/header';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <section id={SubRoutes.HOME_INFO}>
        <Header></Header>
      </section>
      <section id={SubRoutes.HOME_CORE_ASPECTS}>
        <CoreAspects></CoreAspects>
      </section>
      <section id={SubRoutes.HOME_COMPONENTS}>
        <ComponentSample></ComponentSample>
      </section>
      <section id={SubRoutes.HOME_CONTACT} className={styles.contact}>
        <Contact />
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx as LangContext, 'home');

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

export default Home;
