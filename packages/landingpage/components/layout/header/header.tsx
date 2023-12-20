import { useMedia } from 'react-use';
import HeaderDesktop from './desktop/header.desktop';
import HeaderMobile from './mobile/header.mobile';

export default function Header() {
  const isWide = useMedia('(min-width: 1000px)', true);

  return isWide ? <HeaderDesktop /> : <HeaderMobile />;
}
