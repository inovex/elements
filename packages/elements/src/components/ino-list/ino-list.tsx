import { MDCList } from '@material/list';
import {
  Component,
  ComponentInterface,
  Element,
  Host,
  h, Prop,
} from '@stencil/core';

/**
 * @slot default - One or more `ino-(control|list|nav)-item` and `ino-list-divider`
 */
@Component({
  tag: 'ino-list',
  styleUrl: 'ino-list.scss',
  shadow: false,
})
export class List implements ComponentInterface {
  private listInstance!: MDCList;

  @Element() el!: HTMLInoListElement;

  /**
   * For a11y: If list is interactive then set role type
   */
  @Prop() role: 'list' | 'menu' | 'listbox' = 'list';

  /**
   * For a11y: Set to true if list allows multi-selection
   */
  @Prop() multiselect?: boolean = false;

  componentDidLoad() {
    this.listInstance = new MDCList(this.el);
  }

  disconnectedCallback() {
    this.listInstance?.destroy();
  }

  render() {
    return (
      <Host
        class="mdc-list"
        aria-multiselectable={this.multiselect}
        role={this.role}
        data-evolution="true"
      >
      </Host>
    );
  }
}
