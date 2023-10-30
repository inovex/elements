import React, { useState, useRef, useEffect } from 'react';
import { InoSegmentGroup, InoSegmentButton, InoIcon } from '@elements';
import styles from './preview-box.module.scss';

interface PreviewBoxProps {
  title: string;
  description: string;
  previewComponent: JSX.Element;
  highlightedCode: string;
}

export default function PreviewBox({
  title,
  description,
  previewComponent,
  highlightedCode,
}: PreviewBoxProps) {
  const [selectedValue, setSelectedValue] = useState<string>('Preview');
  const previewBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.segmentGroup}>
        <InoSegmentGroup
          value={selectedValue}
          onValueChange={(event) => setSelectedValue(event.detail)}
        >
          <InoSegmentButton value="Preview" className={styles.segmentButton}>
            <InoIcon style={{ marginRight: '7.5px' }} icon="display"></InoIcon>
            Preview
          </InoSegmentButton>
          <InoSegmentButton value="Code" className={styles.segmentButton}>
            <InoIcon style={{ marginRight: '7.5px' }} icon="code"></InoIcon>
            Code
          </InoSegmentButton>
        </InoSegmentGroup>
      </div>
      <div
        className={`${styles.previewBox} ${
          selectedValue === 'Preview' ? styles.previewMode : styles.codeMode
        }`}
        style={{
          background:
            selectedValue === 'Code' ? '#1E1E1E' : 'rgba(255, 255, 255, 0.5)',
          padding: selectedValue === 'Code' ? '16px' : '2rem',
        }}
        ref={previewBoxRef}
      >
        {selectedValue === 'Preview' && (
          <div className={styles.pattern}>{previewComponent}</div>
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
