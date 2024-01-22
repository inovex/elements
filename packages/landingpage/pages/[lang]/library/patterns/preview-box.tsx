import React, { useMemo, useRef, useState } from 'react';
import {
  InoIcon,
  InoPopover,
  InoSegmentButton,
  InoSegmentGroup,
} from '@elements';
import styles from './preview-box.module.scss';
import useTranslation from 'utils/hooks/useTranslation';

type ViewMode = 'CodeMode' | 'PreviewMode';

interface CopyButtonProps {
  rawCode: string;
  copyIconId: string;
}

function CopyButton({ rawCode, copyIconId }: CopyButtonProps) {
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

interface ViewModeSelectionProps {
  selectedValue: ViewMode;
  setSelectedValue: React.Dispatch<React.SetStateAction<ViewMode>>;
}

function ViewModeSelection({
  selectedValue,
  setSelectedValue,
}: ViewModeSelectionProps) {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleMouseEnter = (value: string) => setHoveredButton(value);
  const handleMouseLeave = () => setHoveredButton(null);

  return (
    <InoSegmentGroup
      value={selectedValue}
      onValueChange={(event) => setSelectedValue(event.detail)}
    >
      <InoSegmentButton
        value="PreviewMode"
        onMouseEnter={() => handleMouseEnter('PreviewMode')}
        onMouseLeave={handleMouseLeave}
      >
        <span>
          <InoIcon
            icon="display"
            className={
              selectedValue === 'CodeMode' && hoveredButton !== 'PreviewMode'
                ? styles.unselectedIcon
                : ''
            }
          />
          Preview
        </span>
      </InoSegmentButton>
      <InoSegmentButton
        value="CodeMode"
        onMouseEnter={() => handleMouseEnter('CodeMode')}
        onMouseLeave={handleMouseLeave}
      >
        <span>
          <InoIcon
            icon="code"
            className={
              selectedValue === 'PreviewMode' && hoveredButton !== 'CodeMode'
                ? styles.unselectedIcon
                : ''
            }
          />
          Code
        </span>
      </InoSegmentButton>
    </InoSegmentGroup>
  );
}

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

  const { t } = useTranslation();

  const previewBoxHeight = useMemo(() => {
    if (!previewRef.current) return 0;
    return previewRef.current.getBoundingClientRect().height;
  }, [previewRef.current]);

  return (
    <div className={styles.patternsWrapper}>
      <h1 className="header-h1">{title}</h1>

      <p className="body-l">{description}</p>

      <div className={styles.segmentGroup}>
        <ViewModeSelection
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <div className={styles.divider} />
        <CopyButton rawCode={rawCode} copyIconId={`copy-icon-${id}`} />
      </div>
      <div
        className={`${styles.previewBox} ${
          selectedValue === 'PreviewMode' ? styles.previewMode : styles.codeMode
        }`}
      >
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
