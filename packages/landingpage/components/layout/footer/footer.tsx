import styles from './footer.module.scss';
import { useMedia } from 'react-use';
import FooterDesktop from './desktop/footer.desktop';
import FooterMobile from './mobile/footer.mobile';
import Attributions from '../attributions';

export default function Footer() {
  const isWide = useMedia('(min-width: 600px)', true);

  return (
    <footer className={styles.footer}>
      {isWide ? <FooterDesktop /> : <FooterMobile />}
      <Attributions isWide={isWide} />
    </footer>
  );
}
