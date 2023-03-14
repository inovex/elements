import {useMedia} from 'react-use';
import HeaderDesktop from './header.desktop';
import HeaderMobile from './header.mobile';

export default function Header() {

  const isWide = useMedia('(min-width: 600px)', true);

  return (
    isWide ? <HeaderDesktop /> : <HeaderMobile />
  )
}
