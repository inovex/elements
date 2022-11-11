import styles from './component-sample.module.scss';
import {
  InoChip,
  InoRange,
  InoSnackbar,
  InoInput,
  InoSwitch,
  InoControlItem,
  InoSegmentGroup,
  InoCard,
  InoButton,
  InoIcon,
  InoList,
  InoSegmentButton,
} from '@elements';
import { useState } from 'react';

export default function ComponentSample() {
  const [inputValue, setInputValue] = useState('');
  const [rangeValue, setRangeValue] = useState(50);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioboxValue, setRadioboxValue] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [segmentButtonValue, setSegmentButtonValue] = useState('opt-2');
  const [showSnackbar, setSnackbar] = useState(false);
  const [showChip, setChip] = useState(true);

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
      <div className={styles.container}>
        <div className={styles.chip}>
          <InoCard disableElevation={true}>
            <div className={styles.content} slot="content">
              {showChip && (
                <InoChip
                  removable={true}
                  onChipRemoved={() => {
                    setChip(false);

                    setTimeout(() => {
                      setChip(true);
                    }, 5000);
                  }}
                >
                  Removable Chip
                </InoChip>
              )}
            </div>
            <div slot="footer" className={styles.footer}>
              <div className={styles.component}>Chip</div>
              <div className={styles.label}>Button</div>
            </div>
          </InoCard>
        </div>
        <div className={styles.slider}>
          <InoCard disableElevation={true}>
            <div className={styles.content} slot="content">
              <div className={styles.range}>
                <InoRange
                  min={0}
                  max={100}
                  value={rangeValue}
                  step={1}
                  onValueChange={(value) => setRangeValue(value.detail)}
                ></InoRange>
              </div>
            </div>
            <div slot="footer" className={styles.footer}>
              <div className={styles.component}>Slider</div>
              <div className={styles.label}>Input</div>
            </div>
          </InoCard>
        </div>
        <div className={styles.snackbar}>
          <InoCard disableElevation={true}>
            <div className={styles.content} slot="content">
              <InoButton
                onClick={() => {
                  setSnackbar(true);

                  setTimeout(() => {
                    setSnackbar(false);
                  }, 5000);
                }}
              >
                Show Snackbar
              </InoButton>
              {showSnackbar && (
                <InoSnackbar
                  action-text="Some Action"
                  timeout={5000}
                  type="info"
                  stay-visible-on-hover="false"
                  onHideEl={() => {
                    setSnackbar(false);
                  }}
                >
                  This is a message
                </InoSnackbar>
              )}
            </div>
            <div slot="footer" className={styles.footer}>
              <div className={styles.component}>Snackbar</div>
              <div className={styles.label}>Notification</div>
            </div>
          </InoCard>
        </div>
        <div className={styles.input}>
          <InoCard disableElevation={true}>
            <div className={styles.content} slot="content">
              <InoInput
                label="Label"
                value={inputValue}
                onValueChange={(value) => setInputValue(value.detail)}
              >
                <InoIcon slot="icon-leading" icon="calendar"></InoIcon>
              </InoInput>
            </div>
            <div slot="footer" className={styles.footer}>
              <div className={styles.component}>Input</div>
              <div className={styles.label}>Input</div>
            </div>
          </InoCard>
        </div>
        <div className={styles.toggle}>
          <InoCard disableElevation={true}>
            <div className={styles.content} slot="content">
              <InoSwitch
                checked={switchValue}
                onCheckedChange={(value) => setSwitchValue(value.detail)}
              >
                <InoIcon slot="leading" icon="offboarding"></InoIcon>
                <InoIcon slot="trailing" icon="onboarding"></InoIcon>
              </InoSwitch>
            </div>
            <div slot="footer" className={styles.footer}>
              <div className={styles.component}>Toggle</div>
              <div className={styles.label}>Input</div>
            </div>
          </InoCard>
        </div>
        <div className={styles.controlitem}>
          <InoCard disableElevation={true}>
            <div className={styles.content} slot="content">
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
            </div>
            <div slot="footer" className={styles.footer}>
              <div className={styles.component}>Control Item</div>
              <div className={styles.label}>Structure</div>
            </div>
          </InoCard>
        </div>
        <div className={styles.segmentgroup}>
          <InoCard disableElevation={true}>
            <div className={styles.content} slot="content">
              <InoSegmentGroup
                id="segment-grp"
                name=""
                value={segmentButtonValue}
                onValueChange={(value) => setSegmentButtonValue(value.detail)}
              >
                <InoSegmentButton value="opt-1">Option 1</InoSegmentButton>
                <InoSegmentButton value="opt-2">Option 2</InoSegmentButton>
                <InoSegmentButton value="opt-3">Option 3</InoSegmentButton>
                <InoSegmentButton value="opt-4">Option 4</InoSegmentButton>
              </InoSegmentGroup>
            </div>
            <div slot="footer" className={styles.footer}>
              <div className={styles.component}>Segment Group</div>
              <div className={styles.label}>Button</div>
            </div>
          </InoCard>
        </div>
      </div>
    </div>
  );
}