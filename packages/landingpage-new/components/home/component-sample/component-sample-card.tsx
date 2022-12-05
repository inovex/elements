import { FunctionComponent } from 'react';
import styles from './component-sample-card.module.scss';
import Card from '../../shared/card';

interface Props {
  children: JSX.Element;
  componentName: string;
  componentCategory: string | JSX.Element;
}

const ComponentSampleCard: FunctionComponent<Props> = ({
  children,
  componentName,
  componentCategory,
}) => (
  <Card
    cardClassName={styles.card}
    content={children}
    footerClassName={styles.footer}
    footer={
      <>
        <div className={styles.component}>{componentName}</div>
        <div className={styles.label}>{componentCategory}</div>
      </>
    }
  />
);

export default ComponentSampleCard;
