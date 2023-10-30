import React, { useState } from 'react';
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
  const [selectedValue, setSelectedValue] = useState<string>('preview');

  return (
    <div className={styles.patternsWrapper}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.segmentGroup}>
        <InoSegmentGroup
          value={selectedValue}
          onValueChange={(event) => setSelectedValue(event.detail)}
        >
          <InoSegmentButton value="preview" className={styles.segmentButton}>
            <InoIcon style={{ marginRight: '7.5px' }} icon="display"></InoIcon>
            Preview
          </InoSegmentButton>
          <InoSegmentButton value="Code" className={styles.segmentButton}>
            <InoIcon style={{ marginRight: '7.5px' }} icon="code"></InoIcon>
            Code
          </InoSegmentButton>
        </InoSegmentGroup>
      </div>
      <div className={styles.previewBox}>
        {selectedValue === 'preview' && (
          <div className={styles.pattern}>{previewComponent}</div>
        )}
        {selectedValue === 'Code' && (
          <div
            className={styles.code}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem' }}
          ></div>
        )}
      </div>
    </div>
  );
}
