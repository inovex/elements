import { InoChip, InoPopover } from '@elements';
import { useState } from 'react';
import { useInterval, useCopyToClipboard, useTimeoutFn } from 'react-use';
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
  const [currentFramework, setCurrentFramework] = useState<Frameworks>(
    Frameworks.VUE
  );
  const [clipboardState, copyToClipboard] = useCopyToClipboard();
  const [showTooltip, setShowTooltip] = useState(false);
  const [isReady, cancel, reset] = useTimeoutFn(
    () => setShowTooltip(false),
    3000
  );

  useInterval(() => {
    setCurrentFramework((currentCommand) => {
      const currentIndex = FrameworksArr.indexOf(currentCommand);
      const nextIndex = currentIndex + 1;

      if (FrameworksArr.length <= nextIndex)
        return FrameworksArr[0] as Frameworks;

      return FrameworksArr[nextIndex] as Frameworks;
    });
  }, 3000);

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
        <code>$ {currentCommand}</code>
      </InoChip>
      </div>
      {/* TODO ADD COPIED TO CLIPPBOARD NOTIFICATION <InoPopover attachToBody for={COMMAND_CHIP_ID} colorScheme="primary" placement="bottom" controlled visible={showTooltip} style={{backgroundColor: 'hotpink'}}>
          Copied to clipboard!
        </InoPopover> */}
      {FrameworksArr.map((framework) => (
        <div
            key={framework}
            className={classNames(
            styles.icon,
            framework === currentFramework && styles.iconActive
          )}
        >
          <Image
            src={`/${IconByCommand[framework as Frameworks]}`}
            alt="Javascript Logo"
            layout='fill'
            width="100%"
            height="100%"
          />

        </div>
      ))}
    </div>
  );
}
