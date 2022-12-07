import { SubRoutes } from '../../utils/routes';
import Contributors from '../../components/about/contributors'
import History from '../../components/about/history'

function About() {
  return (
    <div className="section-container">
      <section id={SubRoutes.ABOUT_TEAM}>
        <Contributors />
      </section>
      <section id={SubRoutes.ABOUT_HISTORY}>
        <History />
      </section>
    </div>
  );
}

export default About;
