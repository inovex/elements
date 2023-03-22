import { InoCard } from '@elements';
import classNames from 'classnames';
import { FunctionComponent } from 'react';
import styles from './card.module.scss';

interface Props {
  header?: JSX.Element;
  headerClassName?: string;
  content: JSX.Element;
  contentClassName?: string;
  footer: JSX.Element;
  footerClassName?: string;
  cardClassName?: string;
}

const Card: FunctionComponent<Props> = ({
  header,
  headerClassName,
  content,
  contentClassName,
  footer,
  footerClassName,
  cardClassName,
}) => (
  <InoCard
    className={classNames([styles.card, cardClassName])}
    disableElevation={true}
  >
    {header && <div slot="header" className={classNames(headerClassName)}>
      {header}
    </div>}
    <div slot="content" className={classNames(contentClassName)}>
      {content}
    </div>
    <div slot="footer" className={classNames(footerClassName)}>
      {footer}
    </div>
  </InoCard>
);

export default Card;
