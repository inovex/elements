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
    State
  } from '@stencil/core';
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
    private inoPopoverEl: HTMLInoPopoverElement;
    private inoInputEl: HTMLInoInputElement;
    private inputEl: HTMLInputElement;
    private optionListAnchor: HTMLElement;
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
     * If true, keeps selection open, after selecting a option
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
    @Prop() options!: string[] | KeyValue[];

    @Watch('options')
    onOptionsChange() {
        this.initAutocomplete();
    }

    /**
     * Displays a "add new option item" button
     */
    @Prop() displayAddOption: boolean = true;

    /**
     * A message to show consumer how to add a new option.
     * Shows up if `ino-input` is empty
     */
    @Prop() emptyInputMessage: string = "Type to add new option";

    /**
     * The label for creating a new option button
     */
    @Prop() createOptionLabel: string = "Add option";

    /**
     * Emits string of the added option. Contains new value in `event.detail`.
     */
    @Event() optionCreated: EventEmitter<string | KeyValue>;

    @Listen('optionCreated')
    onOptionCreated() {
        // empty label after event was emitted
        this.searchTerm = '';
    }

    /**
     * Displays the searchterm as a new option to be created in the source option List
     */
    @State() searchTerm: string = "";

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
        this.inoInputEl.value = e.detail;
        this.searchTerm = e.detail;
        e.stopPropagation();
    };

    private initComponents = () => {
        this.inoPopoverEl?.removeEventListener('visibleChanged', this.initSelection) 
    
        this.inoPopoverEl = this.el.querySelector('ino-popover');
       
        this.inoPopoverEl?.addEventListener('visibleChanged', this.initSelection) 
    }

    private initSelection = (e: CustomEvent<boolean>) => {
        const popoverVisibility = e.detail;
        this.inoInputEl?.removeEventListener('valueChange', this.onInputValueChange);
        if (popoverVisibility === false) {
            this.inoPopoverEl.visible = false;
            return
        }
        this.inoPopoverEl.visible = true;
        
        // init Components inside of popover only if visible
        this.inoInputEl = this.inoPopoverEl.querySelector('ino-input');
        this.inputEl = this.inoPopoverEl.querySelector('input');
        this.optionListAnchor = this.inoPopoverEl.querySelector('header') 

        this.inoInputEl?.addEventListener('valueChange', this.onInputValueChange);

        this.initAutocomplete();
    }

    private initAutocomplete() {
        this.autocomplete?.unInit();

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
            destination: () => this.optionListAnchor,
            element: (list, data) => {            
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
                focus: () => {
                    this.autocomplete.start() //open menu on focus
                } 
            },
          },
        };        

        if (this.options?.length > 0 && Selection.isKeyValue(this.options[0])) {
          config['data']['keys'] = ['value'];
        }

        this.autocomplete = new autoComplete(config);
        //set automatic focus on input
        this.inoInputEl.focus();

        if (this.value) this.onValueChange(this.value);
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

        const addOptionBtnText = (searchTerm: string) => {
            if (this.searchTerm.length > 0) {
                return `${this.createOptionLabel} "${searchTerm}"`
            }
            return this.emptyInputMessage
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
                >
                    <ino-chip id={this.for} slot="popover-trigger">Trigger</ino-chip>
                    <div class="popover-content">
                        <header ref={(el) => (this.optionListAnchor = el)}>
                            <ino-input 
                                placeholder={this.label}
                                outline={true}>
                            </ino-input>
                        </header>
                        <footer>
                        {this.displayAddOption && 
                            <ino-button variant='text' onClick={() => {
                                this.optionCreated.emit(this.searchTerm)}}>
                                <ino-icon icon="add" slot="icon-leading"></ino-icon>
                                {addOptionBtnText(this.searchTerm)}
                            </ino-button>}
                        </footer>
                    </div>
                </ino-popover>
            </Host>
        );
    }
}