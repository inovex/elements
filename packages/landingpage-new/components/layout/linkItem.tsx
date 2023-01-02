import styles from './linkItem.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

type Props = {
  url: string;
  name: string;
  isActive?: boolean;
  isDense?: boolean;
};

export default function LinkItem({
  url,
  name,
  isActive = false,
  isDense = false,
}: Props) {
  return (
    <Link href={url}>
      <p
        className={classNames(
          styles.link,
          isActive && styles.linkActive,
          isDense && styles.linkDense,
          isDense ? 'title-m' : 'title-l',
        )}
      >
        {name.toLowerCase()}
      </p>
    </Link>
  );
}
