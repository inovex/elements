import { FunctionComponent } from 'react';
import styles from './component-sample-card.module.scss';
import Card from '../../shared/card';
import classNames from 'classnames';

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
    contentClassName={styles.content}
    content={children}
    footerClassName={styles.footer}
    footer={
      <>
        <div className={classNames(styles.component, 'body-m')}>
          {componentName}
        </div>
        <div className={classNames(styles.label, 'body-m')}>
          {componentCategory}
        </div>
      </>
    }
  />
);

export default ComponentSampleCard;
