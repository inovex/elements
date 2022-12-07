import styles from './milestone.module.scss'
import { InoIcon } from '@elements';

type Props = {
    icon: string;
    title: string;
    subtitle: string;
    children: any;
}

function Milestone(props: Props) {
    return(
        <div className={styles.milestone}>
            <div className={styles.milestoneHeader}>
                <div className={styles.circle}>
                    <InoIcon icon={props.icon} clickable={false} />
                </div>
                <div>
                    <h2 className={styles.smallheader}>{props.title}</h2>
                    <i>{props.subtitle}</i>
                </div>
            </div>
            <div className={styles.textblock}>
                {props.children} 
            </div>
        </div>
    );
}

export default Milestone;