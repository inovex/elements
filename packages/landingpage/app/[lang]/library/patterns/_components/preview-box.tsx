import React, { useMemo, useRef, useState } from 'react';
import ViewModeSelection, { ViewMode } from './view-mode-selection';
import CopyButton from './copy-button';
import styles from './preview-box.module.scss';
import CopyButtonReact from './copy-button-react';

interface PreviewBoxProps {
  id: string;
  title: string;
  description: string;
  previewComponent: JSX.Element;
  highlightedCode: string;
  rawCode: string;
}

export default function PreviewBox({
  id,
  title,
  description,
  previewComponent,
  highlightedCode,
  rawCode,
}: PreviewBoxProps) {
  const [selectedValue, setSelectedValue] = useState<ViewMode>('PreviewMode');
  const previewRef = useRef<HTMLDivElement>(null);

  const previewBoxHeight = useMemo(() => {
    if (!previewRef.current) return 0;
    return previewRef.current.getBoundingClientRect().height;
  }, [previewRef.current]);

  return (
    <div className={styles.patternsWrapper}>
      <h1 className="header-h1">{title}</h1>

      <p className="body-l">{description}</p>

      <div className={styles.segmentGroup}>
        <ViewModeSelection selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
        <div className={styles.divider} />
        <CopyButton rawCode={rawCode} copyIconId={`copy-icon-${id}`} />
        <CopyButtonReact rawCode={rawCode} copyIconId={`copy-icon-${id}`} />
      </div>
      <div className={`${styles.previewBox} ${selectedValue === 'PreviewMode' ? styles.previewMode : styles.codeMode}`}>
        <div
          ref={previewRef}
          style={{
            display: selectedValue === 'PreviewMode' ? 'block' : 'none',
          }}
        >
          {previewComponent}
        </div>
        <div
          style={{
            display: selectedValue === 'CodeMode' ? 'block' : 'none',
            height: previewBoxHeight,
          }}
          className={styles.code}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        ></div>
      </div>
    </div>
  );
}
