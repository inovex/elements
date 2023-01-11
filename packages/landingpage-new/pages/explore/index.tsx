import { SubRoutes } from '../../utils/routes';
import Demos from '../../components/explore/demos';

const Explore = () => {
  return (
    <div className="section-container">
      <section id={SubRoutes.EXPLORE_DEMOS}>
        <Demos />
      </section>
    </div>
  );
};

export default Explore;
