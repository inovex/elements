import styles from './component-sample.module.scss';
import {
  InoChip,
  InoRange,
  InoInput,
  InoSwitch,
  InoControlItem,
  InoSegmentGroup,
  InoButton,
  InoIcon,
  InoList,
  InoSegmentButton,
  InoRadioGroup,
  InoRadio,
} from '@elements';
import { useState, useCallback, useEffect } from 'react';
import CardComponent from './card-component';

export default function ComponentSample() {
  const [inputValue, setInputValue] = useState('');
  const [rangeValue, setRangeValue] = useState(50);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioboxValue, setRadioboxValue] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [segmentButtonValue, setSegmentButtonValue] = useState('opt-2');
  const [reactChip, setReactChip] = useState(false);
  const [vueChip, setVueChip] = useState(false);

  const [radioGroupValue, setRadioGroupValue] =
    useState<string | number>('opt-2');

  const useMediaQuery = (width: number) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e: any) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);

      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
  };

  const isBreakpoint = useMediaQuery(660);

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
            <CardComponent
              content={
                <>
                  <div className={styles.content} slot="content">
                    <div className={styles.chips}>
                      <InoChip
                        selectable={true}
                        selected={reactChip}
                        onClick={() => setReactChip(!reactChip)}
                      >
                        React
                      </InoChip>
                      <InoChip
                        selectable={true}
                        selected={vueChip}
                        onClick={() => setVueChip(!vueChip)}
                      >
                        Vue
                      </InoChip>
                    </div>
                  </div>
                  <div slot="footer" className={styles.footer}>
                    <div className={styles.component}>Chip</div>
                    <div className={styles.label}>Button</div>
                  </div>
                </>
              }
            ></CardComponent>
          </div>
          <div className={styles.slider}>
            <CardComponent
              content={
                <>
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
                </>
              }
            ></CardComponent>
          </div>
          <div className={styles.snackbar}>
            <CardComponent
              content={
                <>
                  <div className={styles.content} slot="content">
                    <InoButton>I'm a Button</InoButton>
                  </div>
                  <div slot="footer" className={styles.footer}>
                    <div className={styles.component}>Button</div>
                    <div className={styles.label}>Button</div>
                  </div>
                </>
              }
            ></CardComponent>
          </div>
          <div className={styles.input}>
            <CardComponent
              content={
                <>
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
                </>
              }
            ></CardComponent>
          </div>
          <div className={styles.toggle}>
            <CardComponent
              content={
                <>
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
                </>
              }
            ></CardComponent>
          </div>
          <div className={styles.controlitem}>
            <CardComponent
              content={
                <>
                  <div className={styles.content} slot="content">
                    <InoList two-lines="false">
                      <InoControlItem
                        role="checkbox"
                        checked={checkboxValue}
                        text="Checkbox"
                        onCheckedChange={(value) =>
                          setCheckboxValue(value.detail)
                        }
                      ></InoControlItem>
                      <InoControlItem
                        role="radio"
                        checked={radioboxValue}
                        text="Radio Button"
                        onCheckedChange={(value) =>
                          setRadioboxValue(value.detail)
                        }
                      ></InoControlItem>
                    </InoList>
                  </div>
                  <div slot="footer" className={styles.footer}>
                    <div className={styles.component}>Control Item</div>
                    <div className={styles.label}>Structure</div>
                  </div>
                </>
              }
            ></CardComponent>
          </div>
          {isBreakpoint ? (
            <div className={styles.segmentgroup}>
              <CardComponent
                content={
                  <>
                    <div className={styles.content} slot="content">
                      <InoRadioGroup
                        id="radio-grp"
                        value={radioGroupValue}
                        onValueChange={(value) =>
                          setRadioGroupValue(value.detail)
                        }
                        alignment="vertical"
                      >
                        <InoRadio value="opt-1">Opt 1</InoRadio>
                        <InoRadio value="opt-2">Opt 2</InoRadio>
                        <InoRadio value="opt-3">Opt 3</InoRadio>
                      </InoRadioGroup>
                    </div>
                    <div slot="footer" className={styles.footer}>
                      <div className={styles.component}>Radio Group</div>
                      <div className={styles.label}>Structure</div>
                    </div>
                  </>
                }
              ></CardComponent>
            </div>
          ) : (
            <div className={styles.segmentgroup}>
              <CardComponent
                content={
                  <>
                    <div className={styles.content} slot="content">
                      <InoSegmentGroup
                        id="segment-grp"
                        name=""
                        value={segmentButtonValue}
                        onValueChange={(value) =>
                          setSegmentButtonValue(value.detail)
                        }
                      >
                        <InoSegmentButton value="opt-1">
                          Option 1
                        </InoSegmentButton>
                        <InoSegmentButton value="opt-2">
                          Option 2
                        </InoSegmentButton>
                        <InoSegmentButton value="opt-3">
                          Option 3
                        </InoSegmentButton>
                        <InoSegmentButton value="opt-4">
                          Option 4
                        </InoSegmentButton>
                      </InoSegmentGroup>
                    </div>
                    <div slot="footer" className={styles.footer}>
                      <div className={styles.component}>Segment Group</div>
                      <div className={styles.label}>Button</div>
                    </div>
                  </>
                }
              ></CardComponent>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
