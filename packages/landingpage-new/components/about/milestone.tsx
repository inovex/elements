import styles from './milestone.module.scss'

type Props = {
    title: string;
    subtitle: string;
    position: 'right' | 'left';
    children: React.ReactNode;
}

function Milestone(props: Props) {
    return(
    <div className={props.position === 'right' ? styles.milestoneRight : styles.milestoneLeft}>
        <div className={styles.content}>
            <h3>{props.title}</h3>
            <div className={styles.subtitle}>{props.subtitle}</div>
            <div className={styles.text}>{props.children}</div>
        </div>
    </div>
    );
}

export default Milestone;