import { MDCList } from '@material/list';
import {
  Component,
  ComponentInterface,
  Element,
  Host,
  h,
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
  private listEl: HTMLUListElement;
  private listInstance!: MDCList;

  @Element() el!: HTMLInoListElement;

  componentDidLoad() {
    this.listInstance = new MDCList(this.listEl);
  }

  disconnectedCallback() {
    this.listInstance?.destroy();
  }

  render() {
    return (
      <Host>
        <ul
          ref={(el) => (this.listEl = el)}
          class="mdc-list"
        >
          <slot />
        </ul>
      </Host>
    );
  }
}
