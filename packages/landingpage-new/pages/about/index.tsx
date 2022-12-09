import { SubRoutes } from '../../utils/routes';
import Contributors from '../../components/about/contributors'
import History from '../../components/about/history'
import Activity from '../../components/about/activity'

function About() {
  return (
    <div className="section-container">
      <section id={SubRoutes.ABOUT_TEAM}>
        <Contributors />
      </section>
      <section id={SubRoutes.ABOUT_HISTORY}>
        <History />
      </section>
      <section id={SubRoutes.ABOUT_ACTIVITY}>
        <Activity />
      </section>
    </div>
  );
}

export default About;
