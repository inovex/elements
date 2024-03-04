import React, { useState } from 'react';
import { InoIcon, InoPopover } from '@inovex.de/elements-react';
import styles from './preview-box.module.scss';

interface CopyButtonProps {
  rawCode: string;
  copyIconId: string;
}

export default function CopyButton({ rawCode, copyIconId }: CopyButtonProps) {
  const [copyIcon, setCopyIcon] = useState<string>('copy');
  const [visiblePopover, setVisiblePopover] = useState<boolean>(false);

  const handleIconClick = () => {
    setCopyIcon('checkmark');
    setVisiblePopover(true);
    setTimeout(() => {
      setCopyIcon('copy');
      setVisiblePopover(false);
    }, 3000);

    if (navigator.clipboard) {
      navigator.clipboard.writeText(rawCode);
    }
  };

  return (
    <>
      <InoIcon
        id={copyIconId}
        icon={copyIcon}
        className={styles.copyIcon}
        onClick={handleIconClick}
      />
      <InoPopover
        controlled={true}
        visible={visiblePopover}
        for={copyIconId}
        trigger="click"
        placement="top"
      >
        <div className={styles.popover}>
          <span className="body-s">Copied!</span>
        </div>
      </InoPopover>
    </>
  );
}
