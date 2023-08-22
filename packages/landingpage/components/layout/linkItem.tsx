import styles from './linkItem.module.scss';
import classNames from 'classnames';
import Link from 'next/link';
import useTranslation from 'utils/hooks/useTranslation';

type Props = {
  url: string;
  name: string;
  isActive?: boolean;
  isDense?: boolean;
  noMargin?: boolean;
  isSubItem?: boolean;
  className?: string;
};

export default function LinkItem({
  url,
  name,
  isActive = false,
  isDense = false,
  noMargin = false,
  isSubItem = false,
  className,
}: Props) {
  const { locale } = useTranslation();

  return (
    <Link href={`/${locale}${url}`}>
      <p
        className={classNames(
          styles.link,
          isActive && styles.linkActive,
          noMargin && styles.noMargin,
          isDense && styles.linkDense,
          isSubItem && styles.linkSubItem,
          isDense ? 'title-m' : 'title-l',
          className
        )}
      >
        {name.toLowerCase()}
      </p>
    </Link>
  );
}
