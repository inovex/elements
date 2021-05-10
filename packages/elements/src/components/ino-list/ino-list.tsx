import { MDCList } from '@material/list';
import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-list',
  styleUrl: 'ino-list.scss',
  shadow: false,
})
export class List implements ComponentInterface {
  private listInstance!: MDCList;

  @Element() el!: HTMLElement;

  /**
   * Styles the list more dense, making it appear more compact.
   */
  @Prop() dense?: boolean;

  /**
   * Marks this element as list with items having two lines.
   */
  @Prop() twoLines?: boolean;

  /**
   * Configures the leading tiles of each row to display images instead of icons.
   * This will make the graphics of the list items larger.
   */
  @Prop() avatar?: boolean = false;

  componentDidLoad() {
    const listElement = this.el.querySelector('.mdc-list');
    this.listInstance = new MDCList(listElement);
  }

  disconnectedCallback() {
    this.listInstance?.destroy();
  }

  render() {
    const listClasses = classNames({
      'mdc-list': true,
      'mdc-list--dense': this.dense,
      'mdc-list--two-line': this.twoLines,
      'mdc-list--avatar-list': this.avatar,
    });

    return (
      <Host>
        <ul class={listClasses} aria-orientation="vertical">
          <slot />
        </ul>
      </Host>
    );
  }
}
