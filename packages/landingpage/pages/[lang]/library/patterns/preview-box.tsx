import React, { useState, useRef, useEffect } from 'react';
import {
  InoSegmentGroup,
  InoSegmentButton,
  InoIcon,
  InoPopover,
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

  const previewBoxRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    // adjust height of preview box to match code
    if (previewBoxRef.current) {
      if (selectedValue === 'Code') {
        const preElement = previewBoxRef.current.querySelector('pre');
        if (preElement) {
          previewBoxRef.current.style.height = `${
            preElement.scrollHeight + 40
          }px`;
        }
      } else if (selectedValue === 'Preview') {
        previewBoxRef.current.style.height = '';
      }
    }
  }, [selectedValue]);

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
          padding: selectedValue === 'Code' ? '16px' : '2rem',
        }}
        ref={previewBoxRef}
      >
        {selectedValue === 'Preview' && (
          <div>{previewComponent}</div>
        )}
        {selectedValue === 'Code' && (
          <div
            className={styles.code}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          ></div>
        )}
      </div>
    </div>
  );
}
