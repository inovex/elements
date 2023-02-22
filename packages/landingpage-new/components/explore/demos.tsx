import Image from 'next/image';
import { Framework, IconByFramework, NameByFramework } from 'utils/frameworks';
import Link from 'next/link';
import styles from './demos.module.scss';
import useTranslation from 'utils/hooks/useTranslation';
import DemoCard from './demos-card';

const DemoProjectByFrameworks: Partial<Record<Framework, string>> = {
  [Framework.JS]:
    'https://stackblitz.com/edit/ino-elements-js-example?embed=1&file=index.js',
  [Framework.REACT]: 'https://elements.inovex.de/example-projects/react/',
  [Framework.ANGULAR]: 'https://elements.inovex.de/example-projects/angular/',
  [Framework.VUE]: 'https://elements.inovex.de/example-projects/vue/',
};

function Demos() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="header-d3">
        <b>{t('demos.title_1')}</b> {t('demos.title_2')}
      </h1>
      <p>{t('demos.subtitle')}</p>
      <div className={styles.cardWrapper}>
        {Object.keys(DemoProjectByFrameworks).map((key) => (
          <DemoCard
            key={key}
            frameworkIcon={
              <Image
                height={40}
                width={40}
                src={IconByFramework[key as Framework]}
                alt={key + ' logo'}
                className={styles.framework}
              />
            }
            frameworkName={NameByFramework[key as Framework]}
            demoLink={
              <Link
                className={styles.footer}
                href={DemoProjectByFrameworks[key as Framework] ?? ''}
                target="_blank"
              >
                {t('demos.show_demo')}
              </Link>
            }
          />
        ))}
      </div>
    </>
  );
}

export default Demos;
