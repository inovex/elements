import { InoCard } from '@elements';
import classNames from 'classnames';
import { FunctionComponent } from 'react';
import styles from './card.module.scss';

interface Props {
  content: JSX.Element;
  footer: JSX.Element;
  cardClassName?: string;
  footerClassName?: string;
}

const Card: FunctionComponent<Props> = ({
  content,
  footer,
  cardClassName,
  footerClassName,
}) => (
  <InoCard
    className={classNames([styles.card, cardClassName])}
    disableElevation={true}
  >
    <div className={styles.content} slot="content">
      {content}
    </div>
    <div slot="footer" className={classNames(footerClassName)}>
      {footer}
    </div>
  </InoCard>
);

export default Card;
