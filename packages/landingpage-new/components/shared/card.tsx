import { InoCard } from '@elements';
import classNames from 'classnames';
import { FunctionComponent } from 'react';
import styles from './card.module.scss';

interface Props {
  header: JSX.Element;
  content: JSX.Element;
  footer: JSX.Element;
  cardClassName?: string;
}

const Card: FunctionComponent<Props> = ({
  header,
  content,
  footer,
  cardClassName,
}) => (
  <InoCard
    className={classNames([styles.card, cardClassName])}
    disableElevation={true}
  >
    <div slot="header">
      {header}
    </div>
    <div slot="content">
      {content}
    </div>
    <div slot="footer" className={styles.footer}>
      {footer}
    </div>
  </InoCard>
);

export default Card;
