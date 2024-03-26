import {
  Component,
  ComponentInterface,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { addAnchorToLocation, scrollToAnchor } from '../../util/scroll-utils';
import { sectionExists } from './ino-nav-menu-helper';
import { SectionReadyEvent } from '../ino-nav-menu-section/ino-nav-menu-section';

const DEFAULT_OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: 0,
  rootMargin: '-30% 0px -70% 0px',
};

const DEFAULT_SCROLL_OFFSET = 80;

/**
 * A sticky navigation menu or sidebar that dynamically lists the names of sections present
 * on the current page. Each section must be constructed using the `ino-nav-menu-section` component.
 * When a user selects a section from the navigation menu by clicking its name, the corresponding
 * section will smoothly scroll into the viewport, and vice versa.
 *
 * The selected or active section must be handled outside of the component using the property
 * `activeSection` and the event `activeSectionChanged` as described below.
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
   * sectionsIntern represent the found section which ino-nav-menu should display.
   * Will use the IDs from sectionIds if given, or autodetect them in the sectionContainer via the `sectionReady` Events emitted by ino-nav-menu-sections
   *
   */
  @State() sections: Array<HTMLInoNavMenuSectionElement> = [];

  @Watch('sections')
  async reInitSections(): Promise<void> {
    this.observer?.disconnect();
    this.initIntersectionObserver();
    this.scrollAfterInit();
  }

  @Listen('sectionReady', { target: 'body' })
  onSectionReady(e: CustomEvent<SectionReadyEvent>) {
    const sectionEl = e.target as HTMLInoNavMenuSectionElement;

    const alreadyAdded = this.sections.some((section) => section === sectionEl);

    if (alreadyAdded) return;

    this.sections = this.sectionEls;
  }

  /**
   * Title of the navigation menu.
   */
  @Prop() menuTitle!: string;

  /**
   * ID of the container which holds the `ino-nav-menu-section` elements.
   * If no `sectionsContainerId` is provided, the component will automatically look up all `ino-nav-menu-section` in the body.
   */
  @Prop() sectionsContainerId?: string;

  @State() activeSection?: string;

  /**
   * Scroll offset of the sticky navigation menu.
   */
  @Prop() scrollOffset: number = DEFAULT_SCROLL_OFFSET;

  /**
   * Overrides the `ino-nav-menu`'s loading animation behavior.
   * When set to true, the loading animation is displayed indefinitely.
   * When set to false, the `ino-nav-menu` will not show any loading animations.
   *
   * By default, the loading animation will be shown only during the section-fetching/autodetection process.
   */
  @Prop() loading?: boolean = true;

  /**
   * Config of the internal intersection observer.
   */
  @Prop() intersectionObserverConfig = DEFAULT_OBSERVER_OPTIONS;

  private initIntersectionObserver() {
    this.observer = new IntersectionObserver(
      this.updateActiveEntry,
      this.intersectionObserverConfig,
    );

    for (const section of this.sections) {
      this.observer.observe(section);
    }
  }

  private scrollAfterInit(): void {
    let sectionId: string;
    // check if url has # to jump to
    if (!location.hash.includes('#')) {
      return;
    }
    if (this.isLocationWithValidAnchor()) {
      sectionId = location.hash.replace(/#/, '');
    } else if (this.isActiveSectionSet()) {
      sectionId = this.activeSection;
    }
    this.scrollToSection(sectionId, 'instant');
  }

  private updateActiveEntry = (entries: IntersectionObserverEntry[]) => {
    const intersectedElement = entries
      .reverse() // TODO comment why
      .find((el) => el.isIntersecting);

    if (!intersectedElement) return;

    const intersectedSectionId = (
      intersectedElement.target as HTMLInoNavMenuSectionElement
    )?.sectionId;

    if (!intersectedSectionId) return;

    this.activeSection = intersectedSectionId;
  };

  private handleAnchorClick = (sectionId: string) => {
    if (sectionExists(sectionId)) {
      addAnchorToLocation(sectionId);
      this.scrollToSection(sectionId);
    }
  };

  private isLocationWithValidAnchor = (): boolean => {
    if (!this.sections) {
      return false;
    }
    for (const section of this.sections) {
      return section.sectionId.includes(location.hash.replace('#', ''));
    }
  };

  private isActiveSectionSet = (): boolean => {
    const allSections = Object.values(this.sections);

    if (allSections.length === 0) return;

    return allSections.some((section) => section.id === this.activeSection);
  };

  componentDidLoad() {
    if (this.sectionsContainerId) {
      try {
        this.target = document.getElementById(this.sectionsContainerId);
      } catch (e) {
        console.error(
          `[ino-nav-menu] The section container which ID you provided by sectionContainerId could not be found.`,
        );
      }
    }

    this.sections = this.sectionEls;
  }

  /**
   * Programmatically scroll to a given section.
   * @param sectionId
   * @param behavior
   */
  @Method()
  async scrollToSection(
    sectionId: string,
    behavior: ScrollBehavior = 'smooth',
  ) {
    if (!sectionExists(sectionId)) return;

    scrollToAnchor(sectionId, behavior, this.scrollOffset);
  }

  get sectionEls() {
    return Array.from(this.target.querySelectorAll('ino-nav-menu-section'));
  }

  render() {
    return (
      <Host>
        <nav
          class="ino-nav-menu"
          role="menu"
          style={{ top: DEFAULT_SCROLL_OFFSET + 'px' }}
        >
          <h3 class="ino-nav-menu__title">{this.menuTitle}</h3>
          <ul class="ino-nav-menu__sections">
            {this.sections.map((section) => (
              <ino-nav-menu-item
                sectionId={section.sectionId}
                sectionTitle={section.sectionName}
                isActive={this.activeSection === section.sectionId}
                onItemClick={(ev) => this.handleAnchorClick(ev.detail)}
              />
            ))}
          </ul>
        </nav>
        <slot></slot>
      </Host>
    );
  }
}
