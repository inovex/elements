import React, { useMemo, useRef, useState } from 'react';
import {
  InoIcon,
  InoPopover,
  InoSegmentButton,
  InoSegmentGroup,
} from '@elements';
import styles from './preview-box.module.scss';

interface PreviewBoxProps {
  title: string;
  description: string;
  previewComponent: JSX.Element;
  highlightedCode: string;
  rawCode: string;
}

export default function PreviewBox({
  title,
  description,
  previewComponent,
  highlightedCode,
  rawCode,
}: PreviewBoxProps) {
  const [selectedValue, setSelectedValue] = useState<string>('Preview');
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [copyIcon, setCopyIcon] = useState<string>('copy');
  const [visiblePopover, setVisiblePopover] = useState<boolean>(false);

  const previewRef = useRef<HTMLDivElement>(null);

  const previewBoxHeight = useMemo(() => {
    if(!previewRef.current) return 0

    return previewRef.current.getBoundingClientRect().height
  }, [previewRef.current])

  const handleMouseEnter = (value: string) => {
    setHoveredButton(value);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

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
    <div className={styles.patternsWrapper}>
      <h1 className="header-h1">{title}</h1>
      <p className="body-l">{description}</p>
      <div className={styles.segmentGroup}>
        <InoSegmentGroup
          value={selectedValue}
          onValueChange={(event) => setSelectedValue(event.detail)}
        >
          <InoSegmentButton
            value="Preview"
            onMouseEnter={() => handleMouseEnter('Preview')}
            onMouseLeave={handleMouseLeave}
          >
            <span>
              <InoIcon
                icon="display"
                className={
                  selectedValue === 'Code' && hoveredButton !== 'Preview'
                    ? styles.unselectedIcon
                    : ''
                }
              ></InoIcon>
              Preview
            </span>
          </InoSegmentButton>
          <InoSegmentButton
            value="Code"
            onMouseEnter={() => handleMouseEnter('Code')}
            onMouseLeave={handleMouseLeave}
          >
            <span>
              <InoIcon
                icon="code"
                className={
                  selectedValue === 'Preview' && hoveredButton !== 'Code'
                    ? styles.unselectedIcon
                    : ''
                }
              ></InoIcon>
              Code
            </span>
          </InoSegmentButton>
        </InoSegmentGroup>

        <div className={styles.divider} />
        <InoIcon
          id="copy-icon"
          icon={copyIcon}
          className={styles.copyIcon}
          onClick={handleIconClick}
        ></InoIcon>
        <InoPopover
          controlled={true}
          visible={visiblePopover}
          for="copy-icon"
          trigger="click"
          placement="top"
        >
          {' '}
          <div className={styles.popover}>
            <span className="body-s">Copied!</span>
          </div>
        </InoPopover>
      </div>
      <div
        className={`${styles.previewBox} ${
          selectedValue === 'Preview' ? styles.previewMode : styles.codeMode
        }`}
        style={{
          background: selectedValue === 'Code' ? '#1E1E1E' : '#ffffff80',
          padding: selectedValue === 'Code' ? '16px' : '16px',
        }}
      >
        <div
          ref={previewRef}
          style={{ display: selectedValue === 'Preview' ? 'block' : 'none' }}
        >
          {previewComponent}
        </div>
        <div
          style={{ display: selectedValue === 'Code' ? 'block' : 'none', height: previewBoxHeight }}
          className={styles.code}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        ></div>
      </div>
    </div>
  );
}
