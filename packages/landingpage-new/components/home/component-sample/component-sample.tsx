import styles from './component-sample.module.scss';
import {
  InoButton,
  InoChip,
  InoControlItem,
  InoIcon,
  InoInput,
  InoList,
  InoRange,
  InoSegmentButton,
  InoSegmentGroup,
  InoSwitch,
} from '@elements';
import { useState } from 'react';
import ComponentSampleCard from './component-sample-card';
import { useMedia, useSet } from 'react-use';
import Link from 'next/link';

enum ChipValues {
  REACT = 'React',
  VUE = 'Vue',
}

export default function ComponentSample() {
  const [inputValue, setInputValue] = useState('');
  const [rangeValue, setRangeValue] = useState(50);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioboxValue, setRadioboxValue] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [segmentButtonValue, setSegmentButtonValue] = useState('opt-2');
  const [, { has, toggle }] = useSet<ChipValues>(new Set([]));

  const isSmallScreen = useMedia('(max-width: 660px)', false);

  return (
    <div>
      <h1 className={styles.header}>
        the <b>components</b>
      </h1>
      <div className={styles.subHeaderContainer}>
        <p className={styles.subheader}>Check out some of our components</p>
        <span className={styles.link}>
          <Link href="/library">Check out all components</Link>
        </span>
      </div>
      <div className={styles.componentGrid}>
        <div className={styles.chip}>
          <ComponentSampleCard componentName="Chip" componentCategory="Button">
            <div className={styles.chips}>
              {Object.values(ChipValues).map((value) => (
                <InoChip
                  key={value}
                  selectable={true}
                  selected={has(value)}
                  value={value}
                  onClick={() => toggle(value)}
                >
                  {value}
                </InoChip>
              ))}
            </div>
          </ComponentSampleCard>
        </div>
        <div className={styles.slider}>
          <ComponentSampleCard componentName="Slider" componentCategory="Input">
            <div className={styles.range}>
              <InoRange
                min={0}
                max={100}
                value={rangeValue}
                step={1}
                onValueChange={(value) => setRangeValue(value.detail)}
              ></InoRange>
            </div>
          </ComponentSampleCard>
        </div>
        <div className={styles.snackbar}>
          <ComponentSampleCard
            componentName="Button"
            componentCategory="Button"
          >
            <InoButton>I&apos;m a Button</InoButton>
          </ComponentSampleCard>
        </div>
        <div className={styles.input}>
          <ComponentSampleCard componentName="Input" componentCategory="Input">
            <InoInput
              label="Label"
              value={inputValue}
              onValueChange={(value) => setInputValue(value.detail)}
            >
              <InoIcon slot="icon-leading" icon="calendar"></InoIcon>
            </InoInput>
          </ComponentSampleCard>
        </div>
        <div className={styles.toggle}>
          <ComponentSampleCard componentName="Toggle" componentCategory="Input">
            <InoSwitch
              checked={switchValue}
              onCheckedChange={(value) => setSwitchValue(value.detail)}
            >
              <InoIcon slot="leading" icon="offboarding"></InoIcon>
              <InoIcon slot="trailing" icon="onboarding"></InoIcon>
            </InoSwitch>
          </ComponentSampleCard>
        </div>
        <div className={styles.controlitem}>
          <ComponentSampleCard
            componentName="Control Item"
            componentCategory="Structure"
          >
            <InoList two-lines="false">
              <InoControlItem
                role="checkbox"
                checked={checkboxValue}
                text="Checkbox"
                onCheckedChange={(value) => setCheckboxValue(value.detail)}
              ></InoControlItem>
              <InoControlItem
                role="radio"
                checked={radioboxValue}
                text="Radio Button"
                onCheckedChange={(value) => setRadioboxValue(value.detail)}
              ></InoControlItem>
            </InoList>
          </ComponentSampleCard>
        </div>
        <div className={styles.segmentgroup}>
          <ComponentSampleCard
            componentName={'Segment-Group'}
            componentCategory={'Button'}
          >
            <InoSegmentGroup
              id="segment-grp"
              value={segmentButtonValue}
              onValueChange={(value) => setSegmentButtonValue(value.detail)}
            >
              <InoSegmentButton value="opt-1">Option 1</InoSegmentButton>
              <InoSegmentButton value="opt-2">Option 2</InoSegmentButton>
              {!isSmallScreen && (
                <>
                  <InoSegmentButton value="opt-3">Option 3</InoSegmentButton>
                  <InoSegmentButton value="opt-4">Option 4</InoSegmentButton>
                </>
              )}
            </InoSegmentGroup>
          </ComponentSampleCard>
        </div>
      </div>
    </div>
  );
}
