import styles from './milestone.module.scss'

type Props = {
    title: string;
    subtitle: string;
    position: 'right' | 'left';
    children: JSX.Element;
}

function Milestone(props: Props) {
    return(
    <div className={props.position === 'right' ? styles.milestoneRight : styles.milestoneLeft}>
        <div className={styles.marker}></div>
        <div className={styles.content}>
            <h3>{props.title}</h3>
            <span>{props.subtitle}</span>
            <p>{props.children}</p>
        </div>
    </div>
    );
}

export default Milestone;