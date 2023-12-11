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

/**
 * A component that displays a list of choices. It functions as a wrapper around the material [list](https://github.com/material-components/material-components-web/blob/master/packages/mdc-list/) component.
 *
 * This component is a composer to configure and wrap `list-item`s, `list-divider`s, `control-item`s and `nav-item`s.
 *
 * #### Additional Hints
 * Provide `two-lines` to set proper style attributes for list items having a primary and secondary line.
 *
 * @slot default - One or more `ino-(control|list|nav)-item` and `ino-list-divider`
 */
@Component({
  tag: 'ino-list',
  styleUrl: 'ino-list.scss',
  shadow: false,
})
export class List implements ComponentInterface {
  private listEl: HTMLUListElement;
  private listInstance!: MDCList;

  @Element() el!: HTMLInoListElement;

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
    this.listInstance = new MDCList(this.listEl);
  }

  disconnectedCallback() {
    this.listInstance?.destroy();
  }

  render() {
    const listClasses = classNames({
      'mdc-deprecated-list': true,
      'mdc-deprecated-list--dense': this.dense,
      'mdc-deprecated-list--two-line': this.twoLines,
      'mdc-deprecated-list--avatar-list': this.avatar,
    });

    return (
      <Host>
        <ul ref={(el) => (this.listEl = el)} class={listClasses}>
          <slot />
        </ul>
      </Host>
    );
  }
}
