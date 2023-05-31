import { ReactNode } from 'react';
import styles from './stepIndicator.module.scss';

interface StepIndicatorProps {
  step?: string | null;
  children?: ReactNode;
}

/**
 * StepIndicator Component
 * @param {string} [step='?'] - The step number or text to display inside the step indicator
 * @param {ReactNode} [children=null] - The additional text or elements to display next to the step indicator
 */
export default function StepIndicator({
  step = '?',
  children = null,
}: StepIndicatorProps) {
  if (children === null) {
    return <div className={styles.step}>{step}</div>;
  } else {
    return (
      <div className={styles.wrapper}>
        <div className={styles.step}>{step}</div>
        <p>{children}</p>
      </div>
    );
  }
}
