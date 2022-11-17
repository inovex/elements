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
import Card from './card';
import { useMedia, useSet } from 'react-use';

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

  const isSmallScreen = useMedia('(max-width: 660px)');

  return (
    <div>
      <div className={styles.header}>
        <p>
          the <b>components</b>
        </p>
      </div>
      <div className={styles.subheader}>
        <p className={styles.subheader}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr
        </p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.chip}>
            <Card componentName="Chip" componentCategory="Button">
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
            </Card>
          </div>
          <div className={styles.slider}>
            <Card componentName="Slider" componentCategory="Input">
              <div className={styles.range}>
                <InoRange
                  min={0}
                  max={100}
                  value={rangeValue}
                  step={1}
                  onValueChange={(value) => setRangeValue(value.detail)}
                ></InoRange>
              </div>
            </Card>
          </div>
          <div className={styles.snackbar}>
            <Card componentName="Button" componentCategory="Button">
              <InoButton>I&apos;m a Button</InoButton>
            </Card>
          </div>
          <div className={styles.input}>
            <Card componentName="Input" componentCategory="Input">
              <InoInput
                label="Label"
                value={inputValue}
                onValueChange={(value) => setInputValue(value.detail)}
              >
                <InoIcon slot="icon-leading" icon="calendar"></InoIcon>
              </InoInput>
            </Card>
          </div>
          <div className={styles.toggle}>
            <Card componentName="Toggle" componentCategory="Input">
              <InoSwitch
                checked={switchValue}
                onCheckedChange={(value) => setSwitchValue(value.detail)}
              >
                <InoIcon slot="leading" icon="offboarding"></InoIcon>
                <InoIcon slot="trailing" icon="onboarding"></InoIcon>
              </InoSwitch>
            </Card>
          </div>
          <div className={styles.controlitem}>
            <Card componentName="Control Item" componentCategory="Structure">
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
            </Card>
          </div>
          <div className={styles.segmentgroup}>
            <Card componentName={'Segment-Group'} componentCategory={'Button'}>
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
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
