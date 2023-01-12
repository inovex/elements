import {InoCarousel, InoCarouselSlide} from '@elements';
import useBasePath from '../../utils/hooks/use-base-path';
import styles from './examples.module.scss';

function Examples() {
  const basePath = useBasePath();

  return <>
    <h1 className="header-d3">
      application <b>examples</b>
    </h1>
    <p className="body-l">We use the elements in many different of our products, creating a great and consistent product experience. Here are some examples:</p>
    <InoCarousel className={styles.slideshow} hideButtons autoplay animated infinite>
      <InoCarouselSlide value="0" src={`${basePath}/jarvis.png`}></InoCarouselSlide>
      <InoCarouselSlide value="1" src={`${basePath}/selfservice.png`}></InoCarouselSlide>
      <InoCarouselSlide value="1" src={`${basePath}/selfonboarding.png`}></InoCarouselSlide>
      <InoCarouselSlide value="1" src={`${basePath}/inca.png`}></InoCarouselSlide>
    </InoCarousel>
  </>;
}

export default Examples;
