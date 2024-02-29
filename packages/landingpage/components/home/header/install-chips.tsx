import { InoChip } from '@inovex.de/elements-react';
import { useEffect, useState } from 'react';
import { useCopyToClipboard, useInterval, useTimeoutFn } from 'react-use';
import Image from 'next/image';
import styles from './install-chips.module.scss';
import classNames from 'classnames';
import { Framework, IconByFramework } from 'utils/frameworks';
import { useTranslation } from '@hooks/useTranslation';

const FrameworksArr = Object.values(Framework);

const CommandByFrameworks: Record<Framework, string> = {
  [Framework.JS]: 'npm install @inovex.de',
  [Framework.REACT]: 'npm install @inovex.de/elements-react',
  [Framework.ANGULAR]: 'ng add @inovex.de/elements-angular',
  [Framework.VUE]: 'npm install @inovex.de/elements-vue',
};

const COMMAND_CHIP_ID = 'command-chip';

export default function InstallChips() {
  const [manuallySelectedFramework, setManuallySelectedFramework] =
    useState<Framework | null>(null);
  const [carouselFramework, setCarouselFramework] = useState<Framework>(
    Framework.VUE,
  );
  const [currentFramework, setCurrentFramework] =
    useState<Framework>(carouselFramework);

  const [, copyToClipboard] = useCopyToClipboard();
  const [showTooltip, setShowTooltip] = useState(false);
  const [, , reset] = useTimeoutFn(() => setShowTooltip(false), 3000);

  const { t } = useTranslation();

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
    manuallySelectedFramework ? null : 3000,
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
            'body-m',
          )}
        >
          {t('home.header.clipboard_success')}
        </p>
      </div>
      <div className={styles.frameworks}>
        {FrameworksArr.map((framework: Framework) => (
          <div
            key={framework}
            className={classNames(
              styles.icon,
              framework === currentFramework && styles.iconActive,
            )}
          >
            <Image
              onClick={() => {
                setManuallySelectedFramework(
                  currentFramework === framework ? null : framework,
                );
                setCarouselFramework(framework);
              }}
              src={`${IconByFramework[framework]}`}
              alt="Javascript Logo"
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
}
