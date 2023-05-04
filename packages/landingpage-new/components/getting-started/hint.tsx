import { ReactNode } from 'react';
import styles from './Hint.module.scss';

type HintProps = {
  children: ReactNode;
};

/**
 * A hint component that applies specific CSS styles to its text contents.
 * @param children The content to render within the hint.
 */
function Hint({ children }: HintProps) {
  return <p className={styles.hint}>{children}</p>;
}

export default Hint;
