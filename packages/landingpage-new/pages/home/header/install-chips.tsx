import { InoChip } from '@elements';
import { useEffect, useState } from 'react';
import { useCopyToClipboard, useInterval, useTimeoutFn } from 'react-use';
import Image from 'next/image';
import styles from './install-chips.module.scss';
import classNames from 'classnames';

enum Frameworks {
  VUE = 'VUE',
  ANGULAR = 'ANGULAR',
  REACT = 'REACT',
  NATIVE = 'NATIVE',
}

const FrameworksArr = Object.values(Frameworks);

const CommandByFrameworks: Record<Frameworks, string> = {
  [Frameworks.VUE]: 'npm install @inovex.de/elements-vue',
  [Frameworks.ANGULAR]: 'ng add @inovex.de/elements-angular',
  [Frameworks.REACT]: 'npm install @inovex.de/elements-react',
  [Frameworks.NATIVE]: 'npm install @inovex.de',
};

const IconByCommand: Record<Frameworks, string> = {
  [Frameworks.VUE]: 'vue.svg',
  [Frameworks.ANGULAR]: 'angular.svg',
  [Frameworks.REACT]: 'react-icon.svg',
  [Frameworks.NATIVE]: 'javascript.svg',
};

const COMMAND_CHIP_ID = 'command-chip';

export default function InstallChips() {
  const [
    manuallySelectedFramework,
    setManuallySelectedFramework,
  ] = useState<Frameworks | null>(null);
  const [carouselFramework, setCarouselFramework] = useState<Frameworks>(
    Frameworks.VUE
  );
  const [currentFramework, setCurrentFramework] = useState<Frameworks>(
    carouselFramework
  );

  const [, copyToClipboard] = useCopyToClipboard();
  const [showTooltip, setShowTooltip] = useState(false);
  const [,, reset] = useTimeoutFn(
    () => setShowTooltip(false),
    3000
  );

  useInterval(
    () => {
      setCarouselFramework((currentCommand) => {
        const currentIndex = FrameworksArr.indexOf(currentCommand);
        const nextIndex = currentIndex + 1;

        if (FrameworksArr.length <= nextIndex)
          return FrameworksArr[0] as Frameworks;

        return FrameworksArr[nextIndex] as Frameworks;
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
      </div>
      {FrameworksArr.map((framework: Frameworks) => (
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
            src={`/${IconByCommand[framework]}`}
            alt="Javascript Logo"
            layout="fill"
          />
        </div>
      ))}
      <p
        className={classNames(
          styles.successMessage,
          showTooltip && styles.successMessageShow
        )}
      >
        Copied to your clipboard ✓
      </p>
    </div>
  );
}
