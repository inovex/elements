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
import { addAnchorToLocation, scrollToAnchor } from '../../util/scroll-utils';
import { sectionExists } from './ino-nav-menu-helper';
import { SectionReadyEvent } from '../ino-nav-menu-section/ino-nav-menu-section';

const DEFAULT_OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: 0,
  rootMargin: '-30% 0px -70% 0px',
};

type Section = {
  id: string;
  title: string;
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

  /**
   * sectionsIntern represent the found section which ino-nav-menu should display.
   * Will use the IDs from sectionIds if given, or autodetect them in the sectionContainer via the `sectionReady` Events emitted by ino-nav-menu-sections
   *
   */
  @State() sectionsIntern: Record<number, Section> = {};

  @Listen('sectionReady', { target: 'body' })
  onSectionReady(e: CustomEvent<SectionReadyEvent>) {
    const { id, key: orderNumber, title } = e.detail;

    this.sectionsIntern = {
      ...this.sectionsIntern,
      [orderNumber]: { id, title },
    };
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

  /**
   * To specify the selected section, utilize the `buildSectionId` helper function to generate a
   * unique section ID based on the section name if no ID was specified. This ID must be provided when configuring the
   * component. The section ID can be set to null if no section should be selected initially or
   * when operating in autodetect mode (means no sections provided).
   *
   * TODO: rename to activeSectionId
   */
  @Prop() activeSection?: string;

  @Watch('activeSection')
  onActiveSectionChanged(
    newActiveSection: string,
    oldActiveSection: string,
  ): void {
    if (oldActiveSection !== newActiveSection) {
      this.scrollToSection(newActiveSection);
    }
  }

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

  /**
   * Emits the section ID when the corresponding section is selected by scrolling
   * into the viewport. This event can be utilized to update the `activeSection` property.
   */
  @Event({ bubbles: false }) activeSectionChanged!: EventEmitter<string>;

  /**
   * Use to manually inflict another initiation of the sections and their observers
   */
  @Method()
  async reInitSections(): Promise<void> {
    this.observer.disconnect();
    this.initIntersectionObserver();
    this.scrollAfterInit();
  }

  private initIntersectionObserver() {
    this.observer = new IntersectionObserver(
      this.updateActiveEntry,
      this.intersectionObserverConfig,
    );

    for (const index in this.sectionsIntern) {
      this.observer.observe(
        document.getElementById(this.sectionsIntern[index].id),
      );
    }
  }

  private emitActiveSection(sectionId: string): void {
    this.activeSectionChanged.emit(sectionId);
  }

  private scrollToSection(
    sectionId: string,
    behavior: ScrollBehavior = 'smooth',
  ): void {
    if (sectionId && sectionExists(sectionId)) {
      scrollToAnchor(sectionId, behavior, this.scrollOffset);
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
      this.emitActiveSection(sectionId);
    } else if (this.isActiveSectionSet()) {
      sectionId = this.activeSection;
    }
    this.scrollToSection(sectionId, 'instant');
  }

  private updateActiveEntry = (entries: IntersectionObserverEntry[]) => {
    const active = entries.reverse().find((x) => x.isIntersecting)?.target.id;
    if (active !== undefined) {
      this.emitActiveSection(active);
    }
  };

  private handleAnchorClick = (sectionId: string) => {
    if (sectionExists(sectionId)) {
      addAnchorToLocation(sectionId);
      this.scrollToSection(sectionId);
    }
  };

  private isLocationWithValidAnchor = (): boolean => {
    if (!this.sectionsIntern) {
      return false;
    }
    for (const index in this.sectionsIntern) {
      return this.sectionsIntern[index].id.includes(
        location.hash.replace('#', ''),
      );
    }
  };

  private isActiveSectionSet = (): boolean => {
    const allSections = Object.values(this.sectionsIntern);

    if (allSections.length === 0) return;

    return allSections.some((section) => section.id === this.activeSection);
  };

  componentDidLoad() {
    let target = document.body;

    if (this.sectionsContainerId) {
      try {
        target = document.getElementById(this.sectionsContainerId);
      } catch (e) {
        console.error(
          `[ino-nav-menu] The section container which ID you provided by sectionContainerId could not be found.`,
        );
      }
    }

    const allSections = Array.from(
      target.querySelectorAll('ino-nav-menu-section'),
    );

    // TODO: maybe remove order/index? Is it necessary?
    this.sectionsIntern = allSections.reduce(
      (previousValue, currentValue, index) => {
        const id = currentValue.sectionId;
        const title = currentValue.sectionName;

        previousValue[index] = { id, title };

        return previousValue;
      },
      {} as Record<number, Section>,
    );
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
            {Object.values(this.sectionsIntern).map((section) => (
              <ino-nav-menu-item
                sectionId={section.id}
                sectionTitle={section.title}
                isActive={this.activeSection === section.id}
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
