import React from 'react';
import styles from './TableShadow.module.scss';

interface TableShadowProps {
  children: React.ReactNode;
}

/**
 * A component that's intended to wrap a mdx table with a shadowed div.
 */
function TableShadow({ children }: TableShadowProps) {
  return <div className={styles.tableShadow}>{children}</div>;
}

export default TableShadow;
