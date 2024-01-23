import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  Host,
  Prop,
  Watch,
  h,
} from '@stencil/core';
import { addAnchorToLocation, scrollToAnchor } from '../../util/scroll-utils';
import { buildSectionId, sectionExists } from './ino-nav-menu-helper';

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
  /**
   * Title of the navigation menu.
   */
  @Prop() menuTitle!: string;

  /**
   * Section names that should appear in the navigation menu. If no value is provided,
   * the component will automatically look up all `ino-nav-menu-section` components on the current page.
   * If any of the provided section names is invalid, a warning will be logged in the browser console.
   */
  @Prop() sections?: string[];

  /**
   * To specify the selected section, utilize the `buildSectionId` helper function to generate a
   * unique section ID based on the section name. This ID must be provided when configuring the
   * component. The section ID can be set to null if no section should be selected initially or
   * when operating in autodetect mode (means no sections provided).
   */
  @Prop() activeSection: string | null;

  /**
   * Scroll offset of the sticky navigation menu.
   */
  @Prop() scrollOffset: number = DEFAULT_SCROLL_OFFSET;

  /**
   * Config of the internal intersection observer.
   */
  @Prop() intersectionObserverConfig = DEFAULT_OBSERVER_OPTIONS;

  @Watch('activeSection')
  onActiveSectionChanged(): void {
    if (this.lastEmittedSection !== this.activeSection) {
      this.lastEmittedSection = this.activeSection;
      this.scrollToSection(this.activeSection);
    }
  }

  @Watch('sections')
  onSectionsChanged(): void {
    this.observer.disconnect();
    this.initSectionsAndObserver();
  }

  /**
   * Emits the section ID when the corresponding section is selected by scrolling
   * into the viewport. This event can be utilized to update the `activeSection` property.
   */
  @Event({ bubbles: false }) activeSectionChanged!: EventEmitter<string>;

  private lastEmittedSection: string;
  private sectionById: Record<string, string> = {};
  private observer: IntersectionObserver;

  private get sectionIds(): string[] {
    return Object.keys(this.sectionById);
  }

  componentWillLoad(): void | Promise<void> {
    if (!this.autodetectSections && this.sections.length > 0) {
      this.initSectionsAndObserver();
    }
  }

  componentDidLoad(): void {
    setTimeout(() => {
      if (this.autodetectSections) {
        this.initSectionsAndObserver();
      }
      this.scollAfterInit();
    }, 0);
  }

  private get autodetectSections(): boolean {
    return this.sections === undefined || this.sections === null;
  }

  private get sectionsIntern(): string[] {
    return !this.autodetectSections ? this.sections : this.findSections();
  }

  private initSectionsAndObserver(): void {
    this.initSections();
    this.initIntersectionObserver();
  }

  private initSections() {
    this.sectionById = this.sectionsIntern
      .map((name) => ({ id: buildSectionId(name), name }))
      .filter((section) => {
        const valid = this.autodetectSections || sectionExists(section.id);
        if (!valid) {
          console.warn(
            `[ino-nav-menu] Section '${section.name}' with ID '${section.id}' not found.`,
          );
        }
        return valid;
      })
      .reduce((acc, cur) => ({ ...acc, [cur.id]: cur.name }), {});
    if (this.autodetectSections) {
      this.emitActiveSection(buildSectionId(this.sectionsIntern[0]));
    }
  }

  private initIntersectionObserver() {
    this.observer = new IntersectionObserver(
      this.updateActiveEntry,
      this.intersectionObserverConfig,
    );
    this.sectionIds.forEach((x) =>
      this.observer.observe(document.getElementById(x)),
    );
  }

  private emitActiveSection(sectionId: string): void {
    this.lastEmittedSection = sectionId;
    this.activeSectionChanged.emit(sectionId);
  }

  private findSections(): string[] {
    const sections: string[] = [];
    document
      .querySelectorAll('[ino-nav-menu-section]')
      .forEach((node: HTMLElement) => {
        sections.push(node.title);
      });
    return sections;
  }

  private scrollToSection(
    sectionId: string,
    behavior: ScrollBehavior = 'smooth',
  ): void {
    if (sectionId && sectionExists(sectionId)) {
      scrollToAnchor(sectionId, behavior, this.scrollOffset);
    }
  }

  private scollAfterInit(): void {
    let sectionId: string;
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

  private handleAnchorClick = (event: MouseEvent, sectionId: string) => {
    event.preventDefault();
    if (sectionExists(sectionId)) {
      addAnchorToLocation(sectionId);
      this.scrollToSection(sectionId);
    }
  };

  private isLocationWithValidAnchor = (): boolean => {
    return this.sectionIds.some((id) => `#${id}` === location.hash);
  };

  private isActiveSectionSet = (): boolean => {
    return (
      this.sectionIds.length > 0 && this.activeSection !== this.sectionIds[0]
    );
  };

  render() {
    return (
      <Host>
        <nav class="ino-nav-menu" style={{ top: DEFAULT_SCROLL_OFFSET + 'px' }}>
          <h3 class="ino-nav-menu__title">{this.menuTitle}</h3>
          <ul class="ino-nav-menu__sections">
            {this.sectionIds.map((id, i) => (
              <li
                class={{
                  'ino-nav-menu__sections__section': true,
                  'ino-nav-menu__sections__section--active':
                    this.activeSection === id,
                }}
                key={i}
              >
                <a
                  href={`#${id}`}
                  onClick={(e) => this.handleAnchorClick(e, id)}
                >
                  {this.sectionById[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Host>
    );
  }
}
