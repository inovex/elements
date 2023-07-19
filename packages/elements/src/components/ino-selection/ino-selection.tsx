import { MDCSelectEventDetail} from '@material/select';
import {
    Component,
    ComponentInterface,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Listen,
    Prop,
    Watch,
  } from '@stencil/core';
import {
    Virtualizer,
    observeElementRect,
    observeElementOffset,
    elementScroll,    
} from '@tanstack/virtual-core';
import {
    Placement,
  } from 'tippy.js';
import autoComplete from '@tarekraafat/autocomplete.js';
import { KeyValue } from '../types';

type SelectionOption = {value: string | KeyValue};
/**
 * @slot popover-trigger - The target element to attach the triggers to
 */
@Component({
    tag: 'ino-selection',
    styleUrl: 'ino-selection.scss',
    shadow: false,
})

export class Selection implements ComponentInterface {

    private optionsObserver: MutationObserver;
    private inoInputEl: HTMLInoInputElement;
    private inputEl: HTMLInputElement;
    private parentEl: HTMLElement;
    private optionList: HTMLElement;
    private resultItems: string[] | KeyValue [] = [];
    private inoPopoverEl: HTMLInoPopoverElement;
    private autocomplete: any; // no typings for this library yet https://tarekraafat.github.io/autoComplete.js/#/

    @Element() el!: HTMLInoSelectionElement;

    /**
     * Number of ms the search function should be delayed after the user typed something.
     */
    @Prop() debounce = 100; 

    /**
     * Text to display when there are no options found, where `$` is the placeholder for the input of the user.
     */
    @Prop() noOptionsText = 'Found No Results for "$"';

    /**
     * Disables this element.
     */
    @Prop() disabled?: boolean;

    /**
     * The placement of this popover.
     * Accepted values: `top(-start, -end)`, `right(-start, -end)`,
     * `bottom(-start, -end)`, `left(-start, -end)`
     */
    @Prop() placement: Placement = 'auto';

    /**
     * The target id the popover belongs to.
     * If not given, the popover is attached to the element provided in the named slot (`popover-trigger`)
     * or the parent component if a slot element does not exist.
     */
    @Prop() for?: string;

    /**
     * The label of this element.
     */
    @Prop() label?: string;

    /**
     * The selection stays open, after selecting a option
     * 
     * default `stayOpen = false`
     */
    @Prop() stayOpen: boolean = false;

    /**
     * marks the state of the selection as open.
     * 
     * Initial value is `false`
     */
    @Prop() open: boolean = false;

    /**
     * All options either as a string array or as an array of `{key: string; value: string}` objects.
     */
    @Prop() options: string[] | KeyValue[] = ['G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ']

    @Watch('options')
    onOptionsChange() {
        // TODO: emit option change event
    }

    /**
     * Displays a add new option item button
     */
    @Prop() displayAddOption: boolean = true;

    /**
     * Emits when the string of the added option. Contains new value in `event.detail`.
     */
    @Event() optionAdded: EventEmitter<string>;

    /**
     * The value of this element. (**unmanaged**)
     */
    @Prop() value: string | KeyValue | null;

    @Watch('value')
    onValueChange(value: string | KeyValue | null) {
        if (value === null) {
            this.resetInput();
            this.styleInputUnselected();
            return;
        }

        const val = Selection.isKeyValue(value) ? value.value : value;

        if(this.inoInputEl) this.inoInputEl.value = val;
        if(this.inputEl) this.inputEl.selectionStart = this.inputEl.selectionEnd = val.length; // move cursor to end
        this.styleInputSelected();
    }

    /**
     * Emits the list item the user clicked on either as a string or
     * a `{key: string; value: string}` object depending on the provided options.
     *
     * Trigger on two occasions:
     * 1. The user clicked on a list-item.
     * 2. The user types in a string that matches an option and blurs the input
     */
    @Event() valueChange!: EventEmitter<string | { key: string; value: string }>;

    @Listen('selection')
    onItemSelect(ev: CustomEvent<{ selection: SelectionOption }>) {
        const value = ev.detail.selection.value;
        this.valueChange.emit(value);
    }

    @Listen('close')
    onClose(ev: CustomEvent<any>) {
        if (ev.detail.event) return; // contains pointer event if closed by selection

        const { query, matches } = ev.detail;

        const exactMatch: Selection = matches.find(
        (match) =>
            (Selection.isKeyValue(match.value)
            ? match.value.value
            : match.value) === query
        );

        if (exactMatch) {
            this.valueChange.emit(exactMatch.value);
        } else {
            this.valueChange.emit(null);
            this.resetInput();
        }
    }

    /**
     * Displays the select as invalid if set to true.
     * If the property is not set or set to false,
     * the validation is handled by the default validation.
     */
    @Prop() error?: boolean;

    @Watch('error')
    
    componentDidLoad() {
       this.initComponents(); 
    }

    connectedCallback() {
        this.initComponents();
        // in case of usage e.g. in a popover this is necessary
        this.optionsObserver = new MutationObserver(() => {
            forceUpdate(this.el);
        });
    }

    disconnectedCallback() {
        this.optionsObserver?.disconnect();
    }

    private onInputValueChange = (e: CustomEvent<string>) => {
        this.resultItems = [];
        this.inoInputEl.value = e.detail;
        e.stopPropagation();
    };

    private initComponents = () => {
        this.inoPopoverEl = this.el.querySelector('ino-popover');
    }

    private initVirtualScroll = (length: number) => {
        console.log(`initVirtualScroll with ${length} elements`)
        this.parentEl = this.inoPopoverEl.querySelector('#parent');
        this.optionList = this.inoPopoverEl.querySelector('.ino-autocomplete__list')        

        const virtualizer = new Virtualizer({
            count: length,
            getScrollElement: () => this.parentEl,
            estimateSize: () => 20,
            initialRect: {
              height: 250,
              width: 250,
            },
            observeElementRect: observeElementRect,
            observeElementOffset: observeElementOffset,
            scrollToFn: elementScroll,
            onChange: (instance) => {
              const list = this.optionList;
              list.style.height = `${instance.getTotalSize()}px`;
              instance.getVirtualItems().map((element, index) => {
                //result items from autocomplete render through index of resultItems    
                if(this.resultItems[index] !== undefined){
                    const listItem = document.createElement('div');
                    listItem.style.height = `${instance.measureElement}px`;
                    listItem.style.transform = `translateY(${element.start}px)`;
                    listItem.textContent = `${this.resultItems[index]}`;
                    list.append(listItem);
                }
              });
            },
            debug: true,
        })
        virtualizer._willUpdate();
    }    

    private initAutocomplete() {
        this.autocomplete?.unInit();

        this.inoInputEl = this.inoPopoverEl.querySelector('ino-input');
        this.inputEl = this.inoPopoverEl.querySelector('input');
        //this.optionList = this.inoPopoverEl.querySelector('.ino-autocomplete__list')  

        this.inoInputEl?.removeEventListener('valueChange', this.onInputValueChange);

        this.inoInputEl?.addEventListener('valueChange', this.onInputValueChange);
        
        this.inoInputEl?.addEventListener('results', (e: any) => {
            e.detail.results.forEach(result => this.resultItems.push(result.value))
            console.log('this.resultsItems.length', this.resultItems.length)
            this.initVirtualScroll(this.resultItems.length)
        })

        const config = {
          selector: () => this.inputEl,
          threshold: 0,
          debounce: this.debounce,
          data: {
            src: this.options,
          },
          wrapper: false,
          resultsList: {
            noResults: true,
            class: 'mdc-deprecated-list ino-autocomplete__list optionList',
            destination: () => this.optionList,
            element: (list, data) => {
                //this.resultItems = [];
                const info = document.createElement("p");
                if (data.results.length > 0) {
                    info.innerHTML = `Displaying <strong>${data.results.length}</strong> out of <strong>${data.matches.length}</strong> results`;
                } else {
                    info.innerHTML = `Found <strong>${data.matches.length}</strong> matching results for <strong>"${data.query}"</strong>`;
                }
                list.prepend(info);
                
                if (data.results.length > 0) return;
                list.appendChild(this.createNoMatchMessage(data.query));
            },
            maxResults: undefined,
          },
          resultItem: {
            class: 'mdc-deprecated-list-item ino-autocomplete__list-item',
            highlight: 'ino-autocomplete__list-item--highlight',
            selected:
              'mdc-deprecated-list-item--selected ino-autocomplete__list-item--selected',
          },
          events: {
            input: {
                focus: () =>this.autocomplete.start() //open menu on focus
            },
          },
        };
    
        if (this.options?.length > 0 && Selection.isKeyValue(this.options[0])) {
          config['data']['keys'] = ['value'];
        }
    
        this.autocomplete = new autoComplete(config);

        //if (this.value) this.onValueChange(this.value);
      }

    private createNoMatchMessage(query: string): HTMLDivElement {
        const message = document.createElement('div');
        message.setAttribute('class', 'ino-autocomplete__list-item ino-autocomplete__list-item--no-match');
           //Add message text content
        message.innerHTML = `<span>${this.noOptionsText.replace(
            '$',
            query
        )}</span>`;

        return message;
    }
    

    private resetInput(): void {
        if(this.inoInputEl) this.inoInputEl.value = '';
        this.resultItems = [];
    }
    
    @Listen('MDCSelect:change')
    handleInput(e: CustomEvent<MDCSelectEventDetail>) {
        e.preventDefault();
        const detailValue = e.detail?.value;

        if (detailValue !== this.value) {
            this.valueChange.emit(detailValue);
        }
    }

    private static isKeyValue(value: string | KeyValue): value is KeyValue {
        return (value as KeyValue).value !== undefined;
      }

    private static UNSELECTED_INPUT_CLASS = 'ino-input--font-grey';

    private styleInputSelected = () => this.inoInputEl?.classList.remove(Selection.UNSELECTED_INPUT_CLASS);
    private styleInputUnselected = () => this.inoInputEl?.classList.add(Selection.UNSELECTED_INPUT_CLASS);

    render() {  
    
        const handleVisibleChanged = (e: any) => {
            if(e.detail) {
                this.inoPopoverEl.visible = true;
                this.initAutocomplete();
                //this.initVirtualScroll()
                return
            }
            this.inoPopoverEl.visible = false;
        }
    
        return (
            <Host>
                <ino-popover
                    color-scheme="light"
                    distance={10}
                    placement={this.placement}
                    trigger="click"
                    visible={false}
                    interactive={true}
                    for={this.for}
                    controlled={true}
                    onVisibleChanged={handleVisibleChanged}
                >
                    <ino-chip id={this.for} slot="popover-trigger">Trigger</ino-chip>
                    <div class="popover-content">
                        <ino-input 
                            placeholder={this.label}
                            outline={true}>
                        </ino-input>
                
                        <div id="parent">
                            <div class="optionList" ref={(el) => (this.optionList = el)}> 
                            </div>  
                        </div>
                        {this.displayAddOption && 
                            <ino-button variant='text'>
                                <ino-icon icon="add" slot="icon-leading"></ino-icon>
                                Add option
                            </ino-button>}
                    </div>
                </ino-popover>
            </Host>
        );
    }
}