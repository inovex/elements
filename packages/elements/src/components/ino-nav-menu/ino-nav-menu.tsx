import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';
import { addAnchorToLocation, scrollToAnchor } from '../../util/scroll-utils';
import { sectionExists } from './ino-nav-menu-helper';

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
  private lastEmittedSection: string;
  private observer: IntersectionObserver;
  private sectionObserver: MutationObserver;

  private get autodetectSections(): boolean {
    return this.sectionIds === undefined || this.sectionIds === null;
  }

  private get sectionsIntern(): string[] | false {
    if(!this.autodetectSections) {
      return this.sectionIds
    } else if (this.autodetectSections && this.sectionContainer) {
      return this.findSections();
    } else {
      return 
    }
  }

  private get sectionContainer(): HTMLElement | false {
    const container = document.getElementById(this.sectionsContainerId);
    return (container === undefined || container === null)? false : container;
  } 

  /**
   * Title of the navigation menu.
   */
  @Prop() menuTitle!: string;

  /**
   * Section IDs of corresponding sections that should appear in the navigation menu.
   * Use this if you want specific section to be shown in `ino-nav-menu`.
   * If any of the provided section IDs is invalid, a warning will be logged in the browser console.
   */
  @Prop() sectionIds?: string[];

  /**
   * ID of the container which holds the sections.
   * If no `sectionIds` are provided, the component will automatically look up all `ino-nav-menu-section` components in this container.
   */
  @Prop() sectionsContainerId?: string;

  /**
   * To specify the selected section, utilize the `buildSectionId` helper function to generate a
   * unique section ID based on the section name if no ID was specified. This ID must be provided when configuring the
   * component. The section ID can be set to null if no section should be selected initially or
   * when operating in autodetect mode (means no sections provided).
   */
  @Prop() activeSection: string | null;

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

  @Watch('activeSection')
  onActiveSectionChanged(): void {
    if (this.lastEmittedSection !== this.activeSection) {
      this.lastEmittedSection = this.activeSection;
      this.scrollToSection(this.activeSection);
    }
  }

  @Watch('sectionIds')
  onSectionsChanged(): void {
    this.observer.disconnect();
    this.initSectionsAndObserver();
  }

  /**
   * Emits the section ID when the corresponding section is selected by scrolling
   * into the viewport. This event can be utilized to update the `activeSection` property.
   */
  @Event({ bubbles: false }) activeSectionChanged!: EventEmitter<string>;
  
  @State() sectionObjs: Record<string, string>[];

  componentWillLoad(): void | Promise<void> {
    if ((!this.autodetectSections && this.sectionIds.length > 0)) {
      this.initSectionsRenderObserver();
    }
  }

  componentDidLoad(): void {
    if (this.autodetectSections) {
      this.initSectionsRenderObserver();
    }
  }

  private checkForRenderedSections = (mutationsList) => {
    if (mutationsList.some(mutation => mutation.type === 'childList' && mutation.addedNodes.length > 0)) {
      this.initSectionsAndObserver();
      this.scrollAfterInit();
    }
  }

  private initSectionsAndObserver(): void {
    this.initSections();
    this.initIntersectionObserver();
  }

  private initSections() {
    if(!this.sectionsIntern){
      return
    }

    this.sectionObjs = this.sectionsIntern
      .filter((section) => {
        const valid = this.autodetectSections || sectionExists(section);
        if (!valid) {
          console.warn(
            `[ino-nav-menu] Section with ID '${section}' not found.`,
          );
        }
        return valid;
      })
      .map(id => {
        const htmlEl = document.getElementById(id) as HTMLInoNavMenuSectionElement;
        return {id: htmlEl.id, name: htmlEl.title}
      })

    // sections are fetched, deactivate loading if active
    if(this.loading) {
      this.loading = false;
    }

    if (this.autodetectSections) {
      this.emitActiveSection(this.sectionsIntern[0]);
    }
  }

  private findSections(): string[] | false {
    const sections: string[] = [];
    if(!this.sectionContainer) {
      return false
    }
    Array.from(this.sectionContainer
      .querySelectorAll('ino-nav-menu-section'))
      .forEach((section: HTMLInoNavMenuSectionElement) => {
        sections.push(section.sectionId);
      });
    return sections;
  }

  private initSectionsRenderObserver() {
    this.sectionObserver = new MutationObserver(this.checkForRenderedSections);
    this.sectionObserver.observe(document.body, { childList: true, subtree: true });
  }

  private initIntersectionObserver() {
    this.observer = new IntersectionObserver(
      this.updateActiveEntry,
      this.intersectionObserverConfig,
    );
    if(!this.sectionsIntern){
      return
    }
    this.sectionsIntern.forEach((x) =>
      this.observer.observe(document.getElementById(x)),
    );
  }

  private emitActiveSection(sectionId: string): void {
    this.lastEmittedSection = sectionId;
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
    if(!location.hash.includes('#')){
      return
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

  private renderSectionPoint = (el, i) => {
    return (
      <li
        class={{
          'ino-nav-menu__sections__section': true,
          'ino-nav-menu__sections__section--active':
            this.activeSection === el.id,
        }}
        key={i}
      >
        <a
          href={`#${el.id}`}
          onClick={(e) => this.handleAnchorClick(e, el.id)}
        >
          {el.name}
        </a>
      </li>
    )
  }

  private renderLoadingSkeleton = () => {
    // 3 placeholder Elements with loading animation
    const n = 3;

    const skeletonLoaderElements = Array.from({ length: n }, (_) => {
      return (
      <li class="ino-nav-menu__sections__section">
        <div class="skeleton-loader"></div>
      </li>
    )});

    return skeletonLoaderElements;
  }

  render() {
    const loadingPlaceholder = this.loading? this.renderLoadingSkeleton() : null;
    const isFetching = (this.sectionObjs === null || this.sectionObjs === undefined);

    return (
      <Host>
        <nav class="ino-nav-menu" style={{ top: DEFAULT_SCROLL_OFFSET + 'px' }}>
          <h3 class="ino-nav-menu__title">{this.menuTitle}</h3>
            <ul class="ino-nav-menu__sections">
              {isFetching?
               loadingPlaceholder
                :
                this.sectionObjs.map((el, i) => this.renderSectionPoint(el, i))
              }
            </ul>
        </nav>
        <slot></slot>
      </Host>
    );
  }
}
