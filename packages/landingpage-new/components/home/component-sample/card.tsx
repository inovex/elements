import { InoCard } from '@elements';
import { FunctionComponent } from 'react';
import styles from './card.module.scss';

interface Props {
  children: JSX.Element;
  componentName: string;
  componentCategory: string|JSX.Element;
}

const Card: FunctionComponent<Props> = ({
  children,
  componentName,
  componentCategory,
}) => (
  <InoCard className={styles.card} disableElevation={true}>
    <div className={styles.content} slot="content">
      {children}
    </div>
    <div slot="footer" className={styles.footer}>
      <div className={styles.component}>{componentName}</div>
      <div className={styles.label}>{componentCategory}</div>
    </div>
  </InoCard>
);

export default Card;
