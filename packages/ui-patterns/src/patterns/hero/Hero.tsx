import { useEffect } from 'react';
import htmlContent from './hero.html?raw';
import PatternWrapper from '../PatternWrapper';
import inovexLogo from '../../../assets/inovex-logo.svg';
import elementsPreview from '../../../../../assets/elements-preview-small.png';

const Hero = () => {
  useEffect(() => {
    const logoImage = document.querySelector('ino-img#logo');
    const previewImage = document.querySelector('ino-img#preview');
    if (logoImage) {
      logoImage.setAttribute('src', inovexLogo);
    }
    if (previewImage) {
      previewImage.setAttribute('src', elementsPreview);
    }
  }, []);
  return <PatternWrapper htmlContent={htmlContent} />;
};

export default Hero;
