import { Component, ComponentInterface, Element, Host, h } from '@stencil/core';

@Component({
  tag: 'ino-table',
  styleUrl: 'ino-table.scss',
  shadow: false,
})
export class InoTable implements ComponentInterface {
  @Element() El: HTMLElement;

  render() {
    return (
      <Host>
        <div class="mdc-data-table">
          <div class="mdc-data-table__table-container">
            <div class="ino-table__table mdc-data-table__table">
              <div class="ino-table__header">
                <slot name="header" />
              </div>
              <div class="ino-table__body mdc-data-table__content">
                <slot />
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
