import { SubRoutes } from '../../utils/routes';
import Contributors from '../../components/about/contributors'

function About() {
  return (
    <div>
      <section id={SubRoutes.ABOUT_TEAM}>
        <Contributors />
      </section>
    </div>
  );
}

export default About;
