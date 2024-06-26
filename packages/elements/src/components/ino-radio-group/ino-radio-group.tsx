import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  Watch,
  h,
  Listen,
  EventEmitter,
  Event,
} from '@stencil/core';
import { Alignment } from '../types';
import classNames from 'classnames';

/**
 * A wrapper component to be used for a group of ino-radio-buttons. This component manages the single selection functionality of a group of ino-radio-buttons.
 *
 * @slot default - One or more `ino-radio`
 */
@Component({
  tag: 'ino-radio-group',
  styleUrl: 'ino-radio-group.scss',
  shadow: false,
})
export class RadioGroup implements ComponentInterface {
  @Element() el!: HTMLInoRadioGroupElement;

  /**
   * The value of the radio group.
   * If there is an ino-radio child with the given value, the radio-button will be checked and the other radio-buttons unchecked.
   */
  @Prop() value?: string | number | null;
  /**
   * Sets the alignment of the radios to either vertical or horizontal.
   */
  @Prop() alignment: Alignment = 'horizontal';

  @Watch('value')
  valueChanged(value: string) {
    this.updateRadios(value);
  }

  @Listen('checkedChange')
  handleCheckedChange(ev: CustomEvent) {
    const target = ev.target as HTMLInoRadioElement;
    this.valueChange.emit(target.value);
  }

  @Listen('mouseover')
  handleMouseOver(ev: Event) {
    const target = ev.target as HTMLInoRadioElement;
    this.addHoverAnimation(target);
  }

  @Listen('mouseout')
  handleMouseOut() {
    this.removeHoverAnimation();
  }

  async componentDidLoad() {
    this.updateRadios(this.value);
  }

  /**
   * Emits if the user clicks or navigates (via keyboard) to a `<ino-radio>` element within the radio group.
   * Contains the `value` of the selected `<ino-radio>`.
   */
  @Event() valueChange!: EventEmitter<number | string>;

  /**
   * Allows key navigation once radio group has been focused.
   */
  @Listen('keydown')
  async handleKeyDown(ev: KeyboardEvent) {
    if (!ev.key.startsWith('Arrow')) return;

    ev.preventDefault();

    const radios = await this.getRadios();
    const checkedRadio = radios.find(radio => Boolean(radio.checked));

    if (!checkedRadio) {
      this.valueChange.emit(radios[0].value);
      return;
    }

    let nextRadioButton: HTMLInoRadioElement;

    switch (ev.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        nextRadioButton = (checkedRadio.nextElementSibling as HTMLInoRadioElement) ?? radios[0];
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        nextRadioButton = (checkedRadio.previousElementSibling as HTMLInoRadioElement) ?? radios[radios.length - 1];
        break;
    }

    this.valueChange.emit(nextRadioButton.value);
  }

  /**
   * Adds a hover animation to the currently checked ino radio
   */
  private async addHoverAnimation(hoveredRadio: HTMLInoRadioElement) {
    const radios = await this.getRadios();
    const checkedRadio = radios.find(radio => Boolean(radio.checked));

    if (!checkedRadio || hoveredRadio === checkedRadio) {
      return;
    }

    checkedRadio.classList.add('ino-checked-hover');
  }

  private async removeHoverAnimation() {
    const radios = await this.getRadios();
    const checkedRadio = radios.find(radio => radio.classList.contains('ino-checked-hover'));

    if (!checkedRadio) {
      return;
    }

    checkedRadio.classList.remove('ino-checked-hover');
  }

  private async updateRadios(value: string | number) {
    /**
     * Make sure we get all radios first
     * so values are up to date prior
     * to caching the radio group value
     */
    const radios = await this.getRadios();

    let hasChecked = false;

    // Walk the DOM in reverse order, since the last selected one wins!
    for (const radio of radios) {
      if (radio.checked) {
        radio.classList.remove('ino-checked-hover');
      }

      if (!hasChecked && radio.value === value) {
        // correct value for this radio
        // but this radio isn't checked yet
        // and we haven't found a checked yet
        hasChecked = true;
        radio.checked = true;
      } else {
        // this radio doesn't have the correct value
        // or the radio group has been already checked
        radio.checked = false;
      }
    }

    // Reset value if
    if (!hasChecked) {
      console.warn(`No ino-radio button with value=${value} was found.`);
    }
  }

  private getRadios() {
    return Promise.all(Array.from(this.el.querySelectorAll('ino-radio')));
  }

  render() {
    const hostClasses = classNames({
      'ino-radio-group-wrapper': true,
      'ino-radio-group-wrapper--vertical': this.alignment === 'vertical',
      'ino-radio-group-wrapper--horizontal': this.alignment === 'horizontal',
    });
    return (
      <Host>
        <div class={hostClasses} tabIndex={0}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
