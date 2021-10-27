import { MDCChipSet } from '@material/chips';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  Watch,
} from '@stencil/core';

import { ChipSetType } from '../types';

enum ChipTypes {
  ACTION = 'action',
  CHOICE = 'choice',
  FILTER = 'filter',
}

/**
 * @slot default - One or more `ino-chip`
 */
@Component({
  tag: 'ino-chip-set',
  styleUrl: 'ino-chip-set.scss',
  shadow: false,
})
export class ChipSet implements ComponentInterface {
  private mdcInstance: MDCChipSet;

  @Element() el!: HTMLElement;

  /**
   * The type of this chip set that indicates its behavior.
   *
   * `action`: Chips which have an action (default)
   * `choice`: Single selection from a set of options
   * `filter`: Multiple selection from a set of options
   */
  @Prop() type: ChipSetType = 'action';

  @Watch('type')
  typeChanged() {
    this.create();
  }

  /**
   * Event that emits when the value of this element changes.
   *
   * Only applicable if `inoType` is `choice` or `filter`.
   */
  @Event() updateChipSet!: EventEmitter;

  componentDidLoad() {
    this.create();
  }

  disconnectedCallback() {
    this.destroy();
  }

  private destroy() {
    this.mdcInstance?.destroy();
  }

  private create() {
    this.destroy();

    const chipSetEl = this.el.querySelector('.mdc-evolution-chip-set');
    this.mdcInstance = new MDCChipSet(chipSetEl);

    if (this.type !== ChipTypes.ACTION) {
      const chipEls: HTMLInoChipElement[] = Array.from(
        this.el.getElementsByTagName('ino-chip')
      );
      chipEls.forEach((chip) => (chip.selectable = true));
    }

    this.el.addEventListener('MDCChipSet:interaction', console.log);
    this.el.addEventListener('MDCChipSet:removal', console.log);
    this.el.addEventListener('MDCChipSet:selection', console.log);
  }

  render() {
    const isFilterSet = this.type === 'filter';

    return (
      <Host>
        <span
          class="mdc-evolution-chip-set"
          role={isFilterSet ? 'listbox' : 'grid'}
          aria-orientation="horizontal"
          aria-multiselectable={isFilterSet}
        >
          <span class="mdc-evolution-chip-set__chips" role="presentation">
            <slot />
          </span>
        </span>
      </Host>
    );
  }
}
