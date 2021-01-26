import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  Watch,
  h,
} from '@stencil/core';

@Component({
  tag: 'ino-radio-group',
  styleUrl: 'ino-radio-group.scss',
  shadow: true,
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

  async componentDidLoad() {
    this.updateRadios(this.value);

    const radios = await this.getRadios();
    radios.forEach((radio) => {
      radio.addEventListener('mouseover', () => this.addHoverAnimation(radio));
      radio.addEventListener('mouseout', () => this.removeHoverAnimation());
    });
  }

  async disconnectedCallback() {
    const radios = await this.getRadios();
    radios.forEach((radio) => {
      radio.removeEventListener('mouseover', () =>
        this.addHoverAnimation(radio)
      );
      radio.removeEventListener('mouseout', () => this.removeHoverAnimation());
    });
  }

  /**
   * Adds a hover animation to the currently checked ino radio
   */
  private async addHoverAnimation(hoveredRadio: HTMLInoRadioElement) {
    const radios = await this.getRadios();
    const checkedRadio = radios.find((radio) => Boolean(radio.checked));

    if (!checkedRadio || hoveredRadio === checkedRadio) {
      return;
    }

    checkedRadio.classList.add('ino-checked-hover');
  }

  private async removeHoverAnimation() {
    const radios = await this.getRadios();
    const checkedRadio = radios.find((radio) =>
      radio.classList.contains('ino-checked-hover')
    );

    if (!checkedRadio) {
      return;
    }

    checkedRadio.classList.remove('ino-checked-hover');
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
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
