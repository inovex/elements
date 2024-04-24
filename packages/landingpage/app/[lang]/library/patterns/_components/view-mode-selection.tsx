import React, { useState } from 'react';
import { InoIcon, InoSegmentButton, InoSegmentGroup } from '@inovex.de/elements-react';
import styles from './preview-box.module.scss';

export type ViewMode = 'CodeMode' | 'PreviewMode';

export interface ViewModeSelectionProps {
  selectedValue: ViewMode;
  setSelectedValue: React.Dispatch<React.SetStateAction<ViewMode>>;
}

export default function ViewModeSelection({ selectedValue, setSelectedValue }: ViewModeSelectionProps) {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleMouseEnter = (value: string) => setHoveredButton(value);
  const handleMouseLeave = () => setHoveredButton(null);

  return (
    <InoSegmentGroup value={selectedValue} onValueChange={event => setSelectedValue(event.detail)}>
      <InoSegmentButton
        value="PreviewMode"
        onMouseEnter={() => handleMouseEnter('PreviewMode')}
        onMouseLeave={handleMouseLeave}
      >
        <span>
          <InoIcon
            icon="display"
            className={selectedValue === 'CodeMode' && hoveredButton !== 'PreviewMode' ? styles.unselectedIcon : ''}
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
            className={selectedValue === 'PreviewMode' && hoveredButton !== 'CodeMode' ? styles.unselectedIcon : ''}
          />
          Code
        </span>
      </InoSegmentButton>
    </InoSegmentGroup>
  );
}
