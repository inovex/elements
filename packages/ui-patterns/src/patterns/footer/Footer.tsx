import { useEffect } from 'react';
import htmlContent from './footer.html?raw';
import PatternWrapper from '../PatternWrapper';
import inovexLogo from '../../../assets/inovex-logo.svg';

const Footer = () => {
  useEffect(() => {
    const logoImage = document.querySelector('ino-img#logo');
    if (logoImage) {
      logoImage.setAttribute('src', inovexLogo);
    }
  }, []);

  return <PatternWrapper htmlContent={htmlContent} />;
};

export default Footer;
