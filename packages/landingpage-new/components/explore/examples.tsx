import { InoCarousel, InoCarouselSlide, InoIconButton } from '@elements';
import styles from './examples.module.scss';
import { useMethods } from 'react-use';
import classNames from 'classnames';
import useTranslation from '../../utils/hooks/useTranslation';
import useBasePath from '../../utils/hooks/useBasePath';

enum Slides {
  Jarvis,
  SelfService,
  SelfOnboarding,
  Inca,
}

function createMethods(slide: Slides) {
  return {
    set(newSlide: Slides) {
      return newSlide;
    },
    increment(): Slides {
      return slide === Slides.Inca ? Slides.Jarvis : Number(slide) + 1;
    },
    decrement(): Slides {
      return slide === Slides.Jarvis ? Slides.Inca : Number(slide) - 1;
    },
  };
}

function Examples() {
  const basePath = useBasePath();
  const carouselImgPathPrefix = `${basePath}/Carousel`;
  const { t } = useTranslation();

  const [slide, { set, increment, decrement }] = useMethods(
    createMethods,
    Slides.Jarvis as Slides
  );

  return (
    <>
      <h1 className="header-d3">
        {t('examples.title_1')} <b>{t('examples.title_2')}</b>
      </h1>
      <p className={classNames('body-l', styles.subtitle)}>
        {t('examples.sub_title')}
      </p>
      <div className={styles.container}>
        <InoIconButton
          icon="arrow_left"
          activated
          onClick={() => decrement()}
        ></InoIconButton>
        <div className={styles.carouselContainer}>
          <InoCarousel
            className={styles.slideshow}
            hideButtons
            autoplay
            value={slide}
            onValueChange={(ev) => set(ev.detail)}
          >
            <InoCarouselSlide
              value={Slides.Jarvis}
              src={`${carouselImgPathPrefix}_JARVIS.png`}
            ></InoCarouselSlide>
            <InoCarouselSlide
              value={Slides.SelfService}
              src={`${carouselImgPathPrefix}_SELFSERVICE.png`}
            ></InoCarouselSlide>
            <InoCarouselSlide
              value={Slides.SelfOnboarding}
              src={`${carouselImgPathPrefix}_SELFONBOARDING.png`}
            ></InoCarouselSlide>
            <InoCarouselSlide
              value={Slides.Inca}
              src={`${carouselImgPathPrefix}_INCA.png`}
            ></InoCarouselSlide>
          </InoCarousel>
        </div>
        <InoIconButton
          icon="arrow_right"
          activated
          onClick={() => increment()}
        ></InoIconButton>
      </div>
    </>
  );
}

export default Examples;
