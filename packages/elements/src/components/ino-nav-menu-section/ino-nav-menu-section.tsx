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
   * Optional: ID of the section referenced by the `ino-nav-menu` component on your own.
   * Defaults to the sectionName if not set.
   */
  @Prop() sectionId?: string = '';

  /**
   * If true, the section name will be presented as title (h2 element) within the section.
   */
  @Prop() showTitle = true;

  private setSectionId = (): string => {
    if (this.sectionId.trim().length === 0 || this.sectionId === undefined) {
      return buildSectionId(this.sectionName);
    }
    return this.sectionId;
  };

  render() {
    return (
      <Host>
        <section
          id={this.setSectionId()}
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
