import { InoCarousel, InoCarouselSlide, InoIconButton } from '@elements';
import useBasePath from '../../utils/hooks/use-base-path';
import styles from './examples.module.scss';
import { useInterval, useMethods } from 'react-use';
import classNames from 'classnames';
import useTranslation from '../../utils/hooks/useTranslation';

enum Slides {
  Jarvis,
  SelfService,
  SelfOnboarding,
  Inca,
}

function createMethods(slide: Slides) {
  return {
    increment() {
      return slide === Slides.Inca ? Slides.Jarvis : slide + 1;
    },
    decrement() {
      return slide === Slides.Jarvis ? Slides.Inca : slide - 1;
    },
  };
}

function Examples() {
  const basePath = useBasePath();
  const { t } = useTranslation();
  const [slideIndex, { increment, decrement }] = useMethods(
    createMethods,
    Slides.Jarvis
  );

  // implements buggy autoplay functionality until https://github.com/inovex/elements/issues/874 is resolved
  useInterval(increment, 4000);

  return (
    <>
      <h1 className="header-d3">
        {t('examples.title_1')} <b>{t('examples.title_2')}</b>
      </h1>
      <p className={classNames('body-l', styles.subtitle)}>
        {t('examples.sub_title')}
      </p>
      <div className={styles.carouselContainer}>
        <InoIconButton
          icon="arrow_left"
          activated
          onClick={() => decrement()}
        ></InoIconButton>
        <InoCarousel
          className={styles.slideshow}
          hideButtons
          animated
          value={String(slideIndex)}
          onValueChange={console.log}
        >
          <InoCarouselSlide
            value={String(Slides.Jarvis)}
            src={`${basePath}/JARVIS.png`}
          ></InoCarouselSlide>
          <InoCarouselSlide
            value={String(Slides.SelfService)}
            src={`${basePath}/SELFSERVICE.png`}
          ></InoCarouselSlide>
          <InoCarouselSlide
            value={String(Slides.SelfOnboarding)}
            src={`${basePath}/SELFONBOARDING.png`}
          ></InoCarouselSlide>
          <InoCarouselSlide
            value={String(Slides.Inca)}
            src={`${basePath}/INCA.png`}
          ></InoCarouselSlide>
        </InoCarousel>
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
