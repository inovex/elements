import { FunctionComponent } from 'react';
import styles from './demos-card.module.scss';
import Card from 'components/shared/card';
import classNames from 'classnames';
import { InoIcon } from '@elements';

interface Props {
  frameworkName: string;
  frameworkIcon: JSX.Element;
  demoLink: string | JSX.Element;
}

const DemoCard: FunctionComponent<Props> = ({
  frameworkName,
  frameworkIcon,
  demoLink,
}) => (
  <Card
    cardClassName={styles.card}
    contentClassName={styles.content}
    content={
      <>
        <div>{frameworkIcon}</div>
        <div className={classNames(styles.name, 'title-l')}>
          {frameworkName}
        </div>
      </>
    }
    footerClassName={styles.footer}
    footer={
      <div className={styles.link}>
        <span className={classNames(styles.text, 'label-m')}>{demoLink}</span>
        <InoIcon icon="arrow_right" />
      </div>
    }
  />
);

export default DemoCard;
