import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { countBy, isEqual } from 'lodash-es';

const DEFAULT_OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: 0,
  rootMargin: '-30% 0px -70% 0px',
};

/**
 * A sticky navigation menu or sidebar that dynamically lists the names of sections present
 * on the current page. Each section must be constructed using the `ino-nav-menu-section` component.
 * When a user selects a section from the navigation menu by clicking its name, the corresponding
 * section will smoothly scroll into the viewport, and vice versa.
 */
@Component({
  tag: 'ino-nav-menu',
  styleUrl: 'ino-nav-menu.scss',
  shadow: false,
})
export class NavMenu implements ComponentInterface {
  private observer: IntersectionObserver;

  private target = document.body;

  /**
   * Title of the navigation menu.
   */
  @Prop() menuTitle!: string;

  /**
   * ID of the container which holds the `ino-nav-menu-section` elements.
   * If no `sectionsContainerId` is provided, the component will automatically look up all `ino-nav-menu-section` in the body.
   */
  @Prop() sectionsContainerId?: string;

  @Watch('sectionsContainerId')
  onSectionsContainerIdChanged() {
    this.registerSections();
    console.log('section container change');
  }

  /**
   * Config of the internal intersection observer.
   */
  @Prop() intersectionObserverConfig = DEFAULT_OBSERVER_OPTIONS;

  /**
   * Emitted when the active section within the navigation menu changes.
   * This event provides the ID of the newly active section.
   * Can be used for syncing the currently active element to the hash of the URL.
   */
  @Event() activeSectionChange: EventEmitter<string>;

  /**
   * Programmatically scrolls to the specified section within the navigation sections.
   * @param sectionId The ID of the section to scroll to.
   * @param behavior (Optional) The scrolling behavior (see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo#behavior)). Defaults to 'smooth'.
   * @param topOffset (Optional) The top offset applied during scrolling to adjust the final position. Defaults to 80 pixels.
   */
  @Method()
  async scrollToSection(
    sectionId: string,
    behavior: ScrollBehavior = 'smooth',
    topOffset = 80,
  ) {
    const escapedId = CSS.escape(sectionId); // id could contain invalid characters (numbers, (, ), ...)
    const elementToScrollTo = this.target.querySelector(`#${escapedId}`);

    if (!elementToScrollTo) {
      throw new Error(
        `Could not scroll to element with id ${sectionId}. It doesn't exist.`,
      );
    }

    const { top } = elementToScrollTo.getBoundingClientRect();

    const offsetPosition = top + window.scrollY - topOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: behavior,
    });
  }

  /**
   * References to the `ino-nav-menu-section` elements within the navigation menu.
   * This array is dynamically updated based on the sections present on the current page.
   */
  @State() sections: Array<HTMLInoNavMenuSectionElement> = [];

  /**
   * Represents the ID of the currently active section within the navigation menu.
   * This state property is dynamically updated as the user scrolls through the page.
   */
  @State() activeSection?: HTMLInoNavMenuSectionElement;

  @Watch('activeSection')
  onActiveSectionChange() {
    if (!this.activeSection) return;

    this.activeSectionChange.emit(this.activeSection.sectionId);
  }

  @Listen('sectionReady', { target: 'body' })
  onSectionReady(e: CustomEvent<void>) {
    const sectionEl = e.target as HTMLInoNavMenuSectionElement;
    const alreadyAdded = this.sections.some((section) => section === sectionEl);

    if (alreadyAdded) return;

    console.log('Section ready');
    this.registerSections();
  }

  connectedCallback() {
    if (this.sectionsContainerId) {
      try {
        this.target = document.getElementById(this.sectionsContainerId);
      } catch (e) {
        console.error(
          `[ino-nav-menu] The section container which ID you provided by sectionContainerId could not be found.`,
        );
      }
    }
  }

  componentDidLoad() {
    this.registerSections();
  }

  private updateActiveEntry = (entries: IntersectionObserverEntry[]) => {
    const intersectedElement = entries
      .reverse()
      .find((el) => el.isIntersecting);

    if (!intersectedElement) return;

    const intersectedSection =
      intersectedElement.target as HTMLInoNavMenuSectionElement;

    if (!intersectedSection) return;

    this.activeSection = intersectedSection;
  };

  /**
   * Re-initializes the sections within the navigation menu.
   * This method disconnects the current IntersectionObserver instance, initializes a new one,
   * and scrolls to the active section after reinitialization.
   */
  private registerSections() {
    const newSections = Array.from(
      this.target.querySelectorAll('ino-nav-menu-section'),
    );

    if (isEqual(newSections, this.sections)) {
      console.log('equal ...');
      return;
    }

    this.sections = Array.from(
      this.target.querySelectorAll('ino-nav-menu-section'),
    );

    // check if there are any duplicated IDs
    const sectionCounts = countBy(
      this.sections,
      (section) => section.sectionId,
    );

    Object.entries(sectionCounts)
      .filter(([, count]) => count > 1)
      .forEach(([id, count]) => {
        console.warn(
          `Found ${count} section with the sectionId ${id}. This could potentially lead to unexpected errors.`,
        );
      });

    this.observer?.disconnect();
    this.observer = new IntersectionObserver(
      this.updateActiveEntry,
      this.intersectionObserverConfig,
    );

    for (const section of this.sections) {
      this.observer.observe(section);
    }
  }

  render() {
    console.log('RENDER', this.sectionsContainerId, this.sections);
    return (
      <Host>
        <nav class="ino-nav-menu" role="menu">
          <h3 class="ino-nav-menu__title">{this.menuTitle}</h3>
          <ul class="ino-nav-menu__sections">
            {this.sections.map((section) => (
              <ino-nav-menu-item
                sectionId={section.sectionId}
                sectionTitle={section.sectionName}
                isActive={this.activeSection === section}
                onItemClick={(ev) => this.scrollToSection(ev.detail)}
              />
            ))}
          </ul>
        </nav>
      </Host>
    );
  }
}
