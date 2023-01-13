import styles from './core-aspects.module.scss';
import versatile from '@assets/coreaspect-versatile.svg';
import consistent from '@assets/coreaspect-consistent.svg';
import futureproof from '@assets/coreaspect-futureproof.svg';
import Image from 'next/image';

export default function CoreAspects() {
  return (
    <div className={styles.coreAspectsContainer}>
      <div className={styles.coreAspect}>
        <Image
          src={versatile}
          alt="versatile image"
          width={200}
          height={200}
        />
        <p className="title-l">versatile</p>
        <p className="body-l">
          Runs on every major framework: Angular, React, Vue or just plain
          JavaScript.
        </p>
      </div>
      <div className={styles.coreAspect}>
        <Image
          src={consistent}
          alt="consistent image"
          width={200}
          height={200}
        />
        <p className="title-l">consistent</p>
        <p className="body-l">
          Consistent UI across all framework technologies.
        </p>
      </div>
      <div className={styles.coreAspect}>
        <Image
          src={futureproof}
          alt="futureproof image"
          width={200}
          height={200}
        />
        <p className="title-l">futureproof</p>
        <p className="body-l">
          Continuous development with the latest technology and creative minds.
        </p>
      </div>
    </div>
  );
}
