import { InoChip } from '@elements';
import { useEffect, useState } from 'react';
import { useCopyToClipboard, useInterval, useTimeoutFn } from 'react-use';
import Image from 'next/image';
import styles from './install-chips.module.scss';
import classNames from 'classnames';
import angularIcon from '@assets/angular.svg';
import jsIcon from '@assets/javascript.svg';
import reactIcon from '@assets/react-icon.svg';
import vueIcon from '@assets/vue.svg';

enum Framework {
  VUE = 'VUE',
  ANGULAR = 'ANGULAR',
  REACT = 'REACT',
  NATIVE = 'NATIVE',
}

const FrameworksArr = Object.values(Framework);

const CommandByFrameworks: Record<Framework, string> = {
  [Framework.VUE]: 'npm install @inovex.de/elements-vue',
  [Framework.ANGULAR]: 'ng add @inovex.de/elements-angular',
  [Framework.REACT]: 'npm install @inovex.de/elements-react',
  [Framework.NATIVE]: 'npm install @inovex.de',
};

const IconByFramework: Record<Framework, string> = {
  [Framework.VUE]: vueIcon,
  [Framework.ANGULAR]: angularIcon,
  [Framework.REACT]: reactIcon,
  [Framework.NATIVE]: jsIcon,
};

const COMMAND_CHIP_ID = 'command-chip';

export default function InstallChips() {
  const [
    manuallySelectedFramework,
    setManuallySelectedFramework,
  ] = useState<Framework | null>(null);
  const [carouselFramework, setCarouselFramework] = useState<Framework>(
    Framework.VUE
  );
  const [currentFramework, setCurrentFramework] = useState<Framework>(
    carouselFramework
  );

  const [, copyToClipboard] = useCopyToClipboard();
  const [showTooltip, setShowTooltip] = useState(false);
  const [, , reset] = useTimeoutFn(() => setShowTooltip(false), 3000);

  useInterval(
    () => {
      setCarouselFramework((currentCommand) => {
        const currentIndex = FrameworksArr.indexOf(currentCommand);
        const nextIndex = currentIndex + 1;

        if (FrameworksArr.length <= nextIndex)
          return FrameworksArr[0] as Framework;

        return FrameworksArr[nextIndex] as Framework;
      });
    },
    manuallySelectedFramework ? null : 3000
  );

  useEffect(() => {
    setCurrentFramework(manuallySelectedFramework ?? carouselFramework);
  }, [manuallySelectedFramework, carouselFramework]);

  const currentCommand = CommandByFrameworks[currentFramework];

  return (
    <div className={styles.container}>
      <div className={styles.chipContainer}>
        <InoChip
          id={COMMAND_CHIP_ID}
          className={styles.chip}
          fill="outline"
          onClick={() => {
            copyToClipboard(currentCommand);
            setShowTooltip(true);
            reset();
          }}
        >
          <code className={styles.installCommand}>$ {currentCommand}</code>
        </InoChip>
        <p
          className={classNames(
            styles.successMessage,
            showTooltip && styles.successMessageShow,
            'body-m'
          )}
        >
          Copied to your clipboard ✓
        </p>
      </div>
      <div className={styles.frameworks}>
        {FrameworksArr.map((framework: Framework) => (
          <div
            key={framework}
            className={classNames(
              styles.icon,
              framework === currentFramework && styles.iconActive
            )}
          >
            <Image
              onClick={() => {
                setManuallySelectedFramework(
                  currentFramework === framework ? null : framework
                );
                setCarouselFramework(framework);
              }}
              src={`${IconByFramework[framework]}`}
              alt="Javascript Logo"
              fill
              sizes="25px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
