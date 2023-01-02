import { InoIcon } from '@elements';
import styles from './core-aspects.module.scss';

export default function CoreAspects() {
  return (
    <div className={styles.secondContainer}>
      <div>
        <InoIcon icon="code" clickable={false} />
        <p className="title-l">Kernaspekt 1</p>
        <p className="body-l">
          Runs on every major framework: Angular, React, Vue or just plain
          JavaScript.
        </p>
      </div>
      <div>
        <InoIcon icon="time" clickable={false} />
        <p className="title-l">Kernaspekt 2</p>
        <p className="body-l">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </p>
      </div>
      <div>
        <InoIcon icon="partner" clickable={false} />
        <p className="title-l">Kernaspekt 3</p>
        <p className="body-l">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </p>
      </div>
    </div>
  );
}
