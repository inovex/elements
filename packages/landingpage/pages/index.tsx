import { NextPage } from 'next';
import Contact from 'components/contact/contact';
import CoreAspects from 'components/home/core-aspects/core-aspects';
import ComponentSample from 'components/home/component-sample/component-sample';
import { SubRoutes } from 'utils/routes';
import Header from 'components/home/header/header';
import Page from 'components/layout/page';
import useTranslation from 'utils/hooks/useTranslation';
import FaqSection from 'components/home/faq-section/faq-section';
import KPIsection from 'components/home/kpi-section/kpi-section';

const Home: NextPage = () => {
  const { t } = useTranslation();

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
        <section id={SubRoutes.HOME_KPI}>
          <KPIsection></KPIsection>
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

export default Home;
