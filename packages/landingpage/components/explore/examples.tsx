import { InoCarousel, InoCarouselSlide, InoIconButton } from '@elements';
import styles from './examples.module.scss';
import { useMethods } from 'react-use';
import classNames from 'classnames';
import useTranslation from '../../utils/hooks/useTranslation';
import useSwipe from '../../utils/hooks/useSwipe';

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
  const carouselImgPathPrefix = `/Carousel`;
  const { t } = useTranslation();

  const [slide, { set, increment, decrement }] = useMethods(
    createMethods,
    Slides.Jarvis as Slides
  );

  const swipeHandlers = useSwipe({ onSwipedLeft: increment, onSwipedRight: decrement });


  return (
    <>
      <h1 className="header-d3">
        {t('examples.title_1')} <b>{t('examples.title_2')}</b>
      </h1>
      <p className={classNames('body-l', styles.subtitle)}>
        {t('examples.sub_title')}
      </p>
      <div className={styles.container} {...swipeHandlers}>
        <InoIconButton
          class={styles.arrowButton}
          icon="arrow_left"
          activated
          onClick={() => decrement()}
        ></InoIconButton>
        <div className={styles.carouselContainer}>
          <InoCarousel
            className={styles.slideshow}
            hideButtons
            autoplay
            value={String(slide)}
            onValueChange={(ev) => set(ev.detail)}
          >
            <InoCarouselSlide
              value={String(Slides.Jarvis)}
              src={`${carouselImgPathPrefix}_JARVIS.png`}
            ></InoCarouselSlide>
            <InoCarouselSlide
              value={String(Slides.SelfService)}
              src={`${carouselImgPathPrefix}_SELFSERVICE.png`}
            ></InoCarouselSlide>
            <InoCarouselSlide
              value={String(Slides.SelfOnboarding)}
              src={`${carouselImgPathPrefix}_SELFONBOARDING.png`}
            ></InoCarouselSlide>
            <InoCarouselSlide
              value={String(Slides.Inca)}
              src={`${carouselImgPathPrefix}_INCA.png`}
            ></InoCarouselSlide>
          </InoCarousel>
        </div>
        <InoIconButton
          class={styles.arrowButton}
          icon="arrow_right"
          activated
          onClick={() => increment()}
        ></InoIconButton>
      </div>
    </>
  );
}

export default Examples;
