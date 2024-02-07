import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  Watch,
  Method,
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
  private observer: IntersectionObserver;

  /**
   * sectionsIntern represent the found section which ino-nav-menu should display.
   * Will use the IDs from sectionIds if given, or autodetect them in the sectionContainer via the `sectionReady` Events emitted by ino-nav-menu-sections
   * 
   */
  @State() sectionsIntern: Record<number, {id: string, title: string}> = {};

  @Watch('sectionsIntern')
  onSectionInternChange(newSectionsIntern) {
    const isSectionInternEmpty = Object.keys(newSectionsIntern).length <= 0
    this.setLoading();
    if(!isSectionInternEmpty && !this.loading) {
      // emit first section as active after all sections are fetched
      // TODO: find out how to know, when all sections are fetched
      this.emitActiveSection(this.sectionsIntern[0].id);
    }
  }

  private setLoading = () => {
    // in autodetect loading will be repeatedly set false, because we don't know the amount of sections
    const isSectionInternEmpty = Object.keys(this.sectionsIntern).length <= 0;
    if(this.autodetect && !isSectionInternEmpty) {
      this.loading = false;
      return
    }

    // loading will only stop until all sectionIds are represented in sectionIntern => less rerender
    if(!this.autodetect && this.allIdsPresentInSectionIntern()) {
      this.loading = false;
      return 
    }
    this.loading = true;
  }

  private allIdsPresentInSectionIntern = (): boolean => {
    const renderRecord = []
    for(const index in this.sectionsIntern) {
      renderRecord.push(this.sectionIds.includes(this.sectionsIntern[index].id))
    }
    if (renderRecord.includes(false)) {
      return false
    }
    return true
  }

   /**
   * `autodetect = true`, will listen for `sectionFinish` Events on the container with the `sectionContainerId`
   * triggers a rerender if `autodetect` changes (ex: sectionIds get defined)
   */
  @State() autodetect = false;

  @Watch('autodetect')
  onAutodetectChange(shouldAutodetect: boolean, oldAutodetect: boolean) {
    // do nothing if no changes
    if(shouldAutodetect === oldAutodetect) {
      return
    }

    // empty sectionIntern before mode-switch because a refetch is needed
    this.sectionsIntern = {};

    if (shouldAutodetect){
      this.updateSectionListener(this.sectionsContainerId);
      return
    } 

    // remove preexisting eventListener
    //this.sectionsContainer.removeEventListener('sectionReady', this.autodetectSection);
    // use sectionIds to init Sections
    this.initSectionsAndObserver(this.sectionIds);
    this.scrollAfterInit();
  }

  private autodetectSection = (e: CustomEvent<{key: number, id: string, title: string}>) => { 
    // if autodetect true
    const newSection = {
      id: e.detail.id,
      title: e.detail.title,
    }

    // check if newSection already exists 
    if (e.detail.key in this.sectionsIntern) {
      return
    }
    // add section to corresponding key, to ensure the correct order
    this.sectionsIntern = {
      ...this.sectionsIntern,
      [e.detail.key]: newSection
    };
  }

  /**
   * sets the section according to the given sectionIds. If no ids are provided, switches to autodetect-mode
   */
  private setSectionsFromProps = (ids: string[]) => {
    if(ids.length <= 0){
      console.warn('no sectionIds provided, change mode to autodetect')
      this.autodetect = true;
      return
    }

    ids.forEach((id, index) => {
      const newSectionElement = document.getElementById(id);
      const newSection = {
        id: newSectionElement.id,
        title: newSectionElement.title,
      }
      this.sectionsIntern[index] = newSection;
    });

    this.emitActiveSection(this.sectionsIntern[0].id);
  }

  /**
   * Container in which autodetect will search for sections
   */
  private sectionsContainer: HTMLElement;

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

  @Watch('sectionIds')
  onSectionIdsChange(newSectionIds: string[]) {
    this.observer.disconnect();
    this.setSectionsFromProps(newSectionIds);
  }

  /**
   * ID of the container which holds the sections.
   * If no `sectionIds` are provided, the component will automatically look up all `ino-nav-menu-section` components in this container.
   */
  @Prop() sectionsContainerId?: string;

  @Watch('sectionsContainerId')
  onSectionsContainerIdChange(newID: string) {
    this.updateSectionListener(newID);
  }

  private updateSectionListener = (sectionContainerId: string) => {
    //this.sectionsContainer.removeEventListener('sectionReady', this.autodetectSection);
    if(sectionContainerId === undefined || sectionContainerId === null) {
      console.warn('No sectionsContainerId found. If you want to autodetect section in a container, please provide ino-nav-menu with a sectionscontainerId')
      return
    }

    // get new sectionsContainer
    this.sectionsContainer = document.getElementById(sectionContainerId)
    if (this.sectionsContainer === undefined || this.sectionsContainer === null) {
      console.warn(`No container with the id "${sectionContainerId}" was found`)
      return
    }     
   
    this.sectionsContainer.addEventListener('sectionReady', this.autodetectSection);
  }

  /**
   * To specify the selected section, utilize the `buildSectionId` helper function to generate a
   * unique section ID based on the section name if no ID was specified. This ID must be provided when configuring the
   * component. The section ID can be set to null if no section should be selected initially or
   * when operating in autodetect mode (means no sections provided).
   */
  @Prop() activeSection: string | null;

  @Watch('activeSection')
  onActiveSectionChanged(newActiveSection: string, oldActiveSection: string): void {
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
    this.initSectionsAndObserver(this.sectionIds);
    this.scrollAfterInit();
  }

  connectedCallback(): void | Promise<void> {
    // check if autodetect mode is necessary
    this.autodetect = this.sectionIds === undefined || this.sectionIds === null;
  }

  private initSectionsAndObserver(ids: string[]): void {
    this.setSectionsFromProps(ids);
    this.initIntersectionObserver();
  }

  private initIntersectionObserver() {
    this.observer = new IntersectionObserver(
      this.updateActiveEntry,
      this.intersectionObserverConfig,
    );

    for(const index in this.sectionsIntern) {
      this.observer.observe(document.getElementById(this.sectionsIntern[index].id))
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
    if(!this.sectionsIntern){
      return false
    }
    for(const index in this.sectionsIntern){
      return this.sectionsIntern[index].id.includes(location.hash.replace('#', ''));
    }
  };

  private isActiveSectionSet = (): boolean => {
    return (
      this.sectionIds.length > 0 && this.activeSection !== this.sectionIds[0]
    );
  };

  private renderSectionPoints = () => {
    if(Object.keys(this.sectionsIntern).length <= 0) {
      return null
    }

    const sectionEls = Object.values(this.sectionsIntern).map((section, index) => {
      return (
        <li
          class={{
            'ino-nav-menu__sections__section': true,
            'ino-nav-menu__sections__section--active':
              this.activeSection === section.id,
          }}
          key={index}
        >
          <a
            href={`#${section.id}`}
            onClick={(e) => this.handleAnchorClick(e, section.id)}
          >
            {section.title}
          </a>
        </li>
      )
    })
    return sectionEls
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

    return (
      <Host>
        <nav class="ino-nav-menu" style={{ top: DEFAULT_SCROLL_OFFSET + 'px' }}>
          <h3 class="ino-nav-menu__title">{this.menuTitle}</h3>
            <ul class="ino-nav-menu__sections">
              {this.loading?
               this.renderLoadingSkeleton()
                :
                this.renderSectionPoints()
              }
            </ul>
        </nav>
        <slot></slot>
      </Host>
    );
  }
}
