import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'ino-nav-menu-item',
  styleUrl: 'ino-nav-menu-item.scss',
  shadow: false,
})
export class NavMenu implements ComponentInterface {
  @Prop() sectionId!: string;

  @Prop() sectionTitle!: string;

  @Prop() isLoading = false;

  @Prop() isActive = false;

  @Event() itemClick: EventEmitter<string>;

  render() {
    return (
      <li
        role="menuitemradio"
        aria-checked={String(this.isActive)}
        class={{
          'ino-nav-menu__sections__section': true,
          'ino-nav-menu__sections__section--active':
            !this.isLoading && this.isActive,
          'ino-nav-menu__sections__section--loading': this.isLoading,
        }}
      >
        {this.isLoading ? (
          <div class="skeleton-loader" />
        ) : (
          <a
            href={`#${this.sectionId}`}
            onClick={(e) => {
              e.preventDefault();
              this.itemClick.emit(this.sectionId);
            }}
          >
            {this.sectionTitle}
          </a>
        )}
      </li>
    );
  }
}
