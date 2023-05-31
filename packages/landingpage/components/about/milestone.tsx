import styles from './milestone.module.scss';
import classNames from 'classnames';

type Props = {
  title: string;
  subtitle: string;
  position: 'right' | 'left';
  children: React.ReactNode;
};

function Milestone(props: Props) {
  return (
    <div
      className={
        props.position === 'right'
          ? styles.milestoneRight
          : styles.milestoneLeft
      }
    >
      <div className={styles.content}>
        <h3>{props.title}</h3>
        <div className={classNames(styles.subtitle, 'body-l')}>
          {props.subtitle}
        </div>
        <div className={classNames(styles.text, 'body-m')}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Milestone;
