import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';
import { buildSectionId } from '../ino-nav-menu/ino-nav-menu-helper';

/**
 * This component is designed to construct sections specifically intended
 * for use with the `ino-nav-menu` component.
 */
@Component({
  tag: 'ino-nav-menu-section',
  styleUrl: 'ino-nav-menu-section.scss',
  shadow: false,
})
export class NavMenuSection implements ComponentInterface {
  /**
   * Name of the section referenced by the `ino-nav-menu` component.
   */
  @Prop() sectionName!: string;

  /**
   * If true, the section name will be presented as title (h2 element) within the section.
   */
  @Prop() showTitle = true;

  render() {
    return (
      <Host>
        <section
          id={buildSectionId(this.sectionName)}
          title={this.sectionName}
          ino-nav-menu-section
        >
          {this.showTitle && <h2>{this.sectionName}</h2>}
          <slot />
        </section>
      </Host>
    );
  }
}
