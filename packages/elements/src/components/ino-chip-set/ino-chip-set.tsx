import { MDCChip, MDCChipSet } from '@material/chips';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  Watch,
  h,
} from '@stencil/core';
import classNames from 'classnames';

import { ChipSetType } from '../types';

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
  private listenerAttached = false;

  @Element() el!: HTMLElement;

  /**
   * The type of this chip set that indicates its behavior.
   *
   * `choice`: Single selection from a set of options
   * `filter`: Multiple selection from a set of options
   * `input`: Enable user input by converting text into chips
   */
  @Prop() type?: ChipSetType = '';

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

    if (this.listenerAttached) {
      this.el.removeEventListener('MDCChip:interaction', (_) =>
        this.notifyChange()
      );
      this.listenerAttached = false;
    }
  }

  private create() {
    this.destroy();

    const chipSetEl = this.el.querySelector('.mdc-chip-set');
    this.mdcInstance = new MDCChipSet(
      chipSetEl,
      undefined,
      (chipEl: HTMLElement) => {
        // This functions hooks into the mdc to customize the init of a chip
        const chip = new MDCChip(chipEl);
        chip.shouldRemoveOnTrailingIconClick = false;
        this.prepareChip(chip.id);
        return chip;
      }
    );

    if (this.type === 'choice' || this.type === 'input') {
      this.el.addEventListener('MDCChip:interaction', (_) =>
        this.notifyChange()
      );
      this.listenerAttached = true;
    }
  }

  private notifyChange() {
    const selectedChipIds = this.mdcInstance.selectedChipIds;
    if (selectedChipIds.length <= 0) {
      this.updateChipSet.emit(true);
      return;
    }
    const chipValues = selectedChipIds.map(
      (chipId) => this.getInoChip(chipId).value
    );
    this.updateChipSet.emit(
      chipValues.length === 1 ? chipValues[0] : chipValues
    );
  }

  private prepareChip(chipId: string) {
    if (this.type === 'filter') {
      const chip = this.getInoChip(chipId);
      chip.selectable = this.type === 'filter';
    }
  }

  private getInoChip(chipId: string) {
    const mdcRoot = this.el.querySelector(`#${chipId}`);
    return mdcRoot!.parentElement as HTMLInoChipElement;
  }

  render() {
    const classChipSet = classNames(
      'mdc-chip-set',
      { 'mdc-chip-set--choice': this.type === 'choice' },
      { 'mdc-chip-set--filter': this.type === 'filter' }
    );

    return (
      <Host>
        <div class={classChipSet}>
          <slot />
        </div>
      </Host>
    );
  }
}
