import { Component, ComponentInterface, Element, Host, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'ino-radio-group',
  styleUrl: 'ino-radio-group.scss',
  shadow: true
})
export class RadioGroup implements ComponentInterface {

  @Element() el!: HTMLElement;

  /**
   * The value of the radio group. If there is an ino-radio-child with the given value, the radio-button will be checked and the other radio-buttons unchecked.
   */
  @Prop() value?: any | null;

  @Watch('value')
  valueChanged(value: string) {
    this.updateRadios(value);
  }

  componentDidLoad() {
    this.updateRadios(this.value);
  }

  private async updateRadios(value) {
    /**
     * Make sure we get all radios first
     * so values are up to date prior
     * to caching the radio group value
     */
    const radios = await this.getRadios();

    let hasChecked = false;

    // Walk the DOM in reverse order, since the last selected one wins!
    for (const radio of radios) {

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
    return <Host>
      <slot></slot>
    </Host>;
  }
}
