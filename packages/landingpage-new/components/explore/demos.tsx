import Image from 'next/image';
import { Framework, IconByFramework } from '../../utils/frameworks';
import Link from 'next/link';
import styles from './demos.module.scss';

const DemoProjectByFrameworks: Partial<Record<Framework, string>> = {
  [Framework.REACT]: 'https://elements.inovex.de/example-projects/react/',
  [Framework.ANGULAR]: 'https://elements.inovex.de/example-projects/angular/',
  [Framework.VUE]: 'https://elements.inovex.de/example-projects/vue/',
};

function Demos() {
  return (
    <>
      <h1 className="header-d3">
        <b>demo</b> projects
      </h1>
      {Object.keys(DemoProjectByFrameworks).map((key) => (
        <Link
          className={styles.link}
          key={key}
          href={DemoProjectByFrameworks[key as Framework] ?? ''}
          target="_blank"
        >
          <Image
            src={IconByFramework[key as Framework]}
            alt={key + ' LOGO'}
            fill
          />
        </Link>
      ))}
    </>
  );
}

export default Demos;
