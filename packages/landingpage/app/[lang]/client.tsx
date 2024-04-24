'use client';

import Contact from './_components/contact/contact';
import { SubRoutes } from '@routes';
import { ComponentSample, CoreAspects, FaqSection, Header, KPIsection } from './_components/home';

export const Home = () => {
  return (
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
  );
};
