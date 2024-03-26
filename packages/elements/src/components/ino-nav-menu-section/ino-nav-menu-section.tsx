import { Component, ComponentInterface, Event, EventEmitter, h, Host, Prop } from "@stencil/core";

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
   * Name of the section that is shown within the `ino-nav-menu`.
   */
  @Prop() sectionName!: string;

  /**
   * Optional: ID of the section. Defaults to `sectionName` if not set.
   */
  @Prop({ mutable: true, reflect: true }) sectionId?: string;

  /**
   * If true, renders the `sectionName` as a `<h2>` element within the section.
   */
  @Prop() showTitle = true;

  /**
   * Emits the section ID on finished loading.
   * Is used internally to register the section to the `ino-nav-menu`.
   */
  @Event() sectionReady: EventEmitter<void>;

  componentWillLoad(): void {
    this.sectionId = NavMenuSection.sanitizeSectionName(this.sectionName);
  }

  componentDidLoad(): void {
    this.sectionReady.emit();
  }

  private static sanitizeSectionName(name: string) {
    return name?.toLowerCase().replace(/\s+/g, '-');
  }

  render() {
    return (
      <Host>
        <section
          id={this.sectionId}
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
