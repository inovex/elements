import styles from './linkItem.module.scss';
import classNames from 'classnames';
import Link from 'next/link';
import { useContext } from 'react';
import { I18NContext } from '../../utils/context/i18nContext';

type Props = {
  url: string;
  name: string;
  isActive?: boolean;
  isDense?: boolean;
  noMargin?: boolean;
  isSubItem?: boolean;
  className?: string;
  isFooter?: boolean;
};

export default function LinkItem({
  url,
  name,
  isActive = false,
  isDense = false,
  noMargin = false,
  isSubItem = false,
  className,
  isFooter = false,
}: Props) {
  const { lang } = useContext(I18NContext);

  return (
    <Link href={`/${lang}${url}`}>
      <p
        className={classNames(
          styles.link,
          isActive && styles.linkActive,
          noMargin && styles.noMargin,
          isDense && styles.linkDense,
          isFooter && styles.footerDense,
          isSubItem && styles.linkSubItem,
          isDense ? 'title-m' : 'title-l',
          className,
        )}
      >
        {name.toLowerCase()}
      </p>
    </Link>
  );
}
