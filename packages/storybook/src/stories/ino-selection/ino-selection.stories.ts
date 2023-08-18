import { Components, KeyValue } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { decorateStoryWithClass } from '../utils';
import { html } from 'lit-html';
import './ino-selection.scss';
import { TemplateGenerator } from '../template-generator';

const options = ['G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ'];

const KeyValueOptions: KeyValue[] = [{key: 'a', value: 'Anton'}, {key: 'b', value: 'Berta'}, {key: 'c', value: 'Cäsar'}, {key: 'd', value: 'Dora'}, {key: 'e', value: 'Emil'}, {key: 'f', value: 'Friedrich'}, {key: 'g', value: 'Gustav'}, {key: 'h', value: 'Heinrich'}, {key: 'i', value: 'Ida'}];

export default {
  title: 'Input/ino-selection',
  component: 'ino-selection',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-ino-selection'),
  ],
  args: {
    debounce: 100,
    noOptionsText: 'Found No Results',
    disabled: false,
    placement: 'bottom',
    for: '',
    label: 'Select label',
    stayOpen: false,
    value: '',
    error: false,
    open: false,
    options: options,
    displayAddOption: true,
    emptyInputMessage: 'Type to add new option',
    createOptionLabel: 'Add Option',
    controlled: false,
    visible: false,
  },
} as Meta<Components.InoSelection>;

const createChip = (content: string | KeyValue, parentEl: Element | null) => {
  if(parentEl && content) {
    const chip = document.createElement("ino-chip") as HTMLInoChipElement;
    if (typeof content === 'string'){
      chip.innerText = `${content}`;
    } else {
      chip.innerText = `${content.value}`;
    } 
    parentEl?.appendChild(chip);
    return;
  }
  console.log('could not add ino-chip. No container found');
}

const optionCreatedHandler = (e: {target: HTMLInoSelectElement, detail: string & KeyValue}) => {
  const selection = e.target; 
  const parentEl = (e.target as HTMLElement).closest('.story-ino-selection');
  options.push(e.detail)
  selection.setAttribute('options', `${options}`);
  createChip(e.detail as string | KeyValue, parentEl);
}

const handleValueChange = (e: any) => {
  const parentEl = (e.target as HTMLElement).closest('.story-ino-selection');
  if(e.detail === null){
    return;
  }
  createChip(e.detail, parentEl);  
  if(e.target.controlled){
    e.target.setAttribute('visible', false);
  }
}

const template = new TemplateGenerator<Components.InoSelection>(
'ino-selection',
(args) => {
  return html`
    <ino-selection
      disabled="${args.disabled}"
      placement="${args.placement}"
      label="${args.label}"
      stay-open="${args.stayOpen}"
      value="${args.value}"
      error="${args.error}"
      display-add-option="${args.displayAddOption}"
      .options="${args.options}"
      empty-input-message="${args.emptyInputMessage}"
      create-option-label="${args.createOptionLabel}"
      controlled="${args.controlled}"
      visible="${args.visible}"
      @valueChange="${e => handleValueChange(e)}"
      @optionCreated="${e => optionCreatedHandler(e)}"
      >
      <ino-chip slot="popover-trigger">open selection</ino-chip>
    </ino-selection>
`});

export const Playground = template.generatePlaygroundStory();

const templateKeyValue = new TemplateGenerator<Components.InoSelection>(
  'ino-selection',
  (args) => {

    // state of the new Option
    let key: string;
    let value: string;

    const setKey = (e) => {
      const inputEl = e.target;
      inputEl.setAttribute('value', e.detail)
      key = e.detail;
    }

    const setValue = (e) => {
      const inputEl = e.target;
      inputEl.setAttribute('value', e.detail)
      value = e.detail;
    }

    const openDialog = () => {
      const selection = document.querySelector('#ino-selection-key-value');
      const dialogEl = document.querySelector('#create-option-dialog');
      dialogEl?.setAttribute('open', `${true}`);
      // handle visible because popover overlaps ino-dialog 
      // close popover, so ino-dialog is visible
      selection?.setAttribute('visible', `${false}`);
    }

    const createKeyValueOption = (e) => {
      const selection = document.querySelector('#ino-selection-key-value');
      const dialogEl = document.querySelector('#create-option-dialog');
      const inputKey = document.querySelector('#input-key');
      const inputValue = document.querySelector('#input-value');
      // Create new source List with added option
      KeyValueOptions.push({key: key, value: value})
      selection?.setAttribute('options', `${KeyValueOptions}`)
      dialogEl?.setAttribute('open', `${false}`)
      // empty inputs after closing dialog
      inputKey?.setAttribute('value', "");
      inputValue?.setAttribute('value', "");

      const parentEl = selection?.closest('.story-ino-selection');
      if(parentEl){
        createChip(value, parentEl);
      }
    }

    return html`
      <ino-selection
        id="ino-selection-key-value"
        placement="${args.placement}"
        label="${args.label}"
        value="${args.value}"
        display-add-option="${args.displayAddOption}"
        .options="${args.options}"
        empty-input-message="${args.emptyInputMessage}"
        create-option-label="${args.createOptionLabel}"
        controlled="true"
        visible="false"
        @selectionVisibleChanged="${(e) => {e.target.visible = e.detail}}"
        @valueChange="${e => handleValueChange(e)}"
        @optionCreated="${e => openDialog(e)}"
        >
        <ino-chip slot="popover-trigger">open selection</ino-chip>
      </ino-selection>
      <ino-dialog 
        id="create-option-dialog"
        header-text="Add an option"
        @close="${e => e.target.setAttribute('open', false)}"
        >
        <section slot="body">
          <p>You have to provide a key and a value to add an option</p>
          <ino-input 
            outline id="input-key" 
            label="key"
            @valueChange="${e => setKey(e)}"
            >
          </ino-input> 
          <ino-input 
            outline id="input-value" 
            label="value"
            @valueChange="${e => setValue(e)}"
            >
          </ino-input> 
        </section>
        <footer slot="footer">
            <ino-button 
              variant="outlined"
              @click="${e => {e.target.closest('ino-dialog ').open = false}}"
              >
              cancel
            </ino-button>
            <ino-button 
              @click="${e => createKeyValueOption(e)}"
              >
              Add option
            </ino-button>
          </footer>
      </ino-dialog>
  `});
  

export const KeyValueOption = templateKeyValue.generateStoryForProp('options', KeyValueOptions);

const controlledTemplate = new TemplateGenerator<Components.InoSelection>(
'ino-selection',
(args) => {
  
  const handleVisible = (e) => {
    e.target.setAttribute('visible', e.detail);
  }

  return html`
    <ino-selection
      id="controlled-selection"
      placement="${args.placement}"
      label="${args.label}"
      value="${args.value}"
      display-add-option="${args.displayAddOption}"
      .options="${args.options}"
      controlled="${args.controlled}"
      visible="${args.visible}"
      @selectionVisibleChanged="${(e) => handleVisible(e)}"
      @valueChange="${e => handleValueChange(e)}"
      @optionCreated="${e => optionCreatedHandler(e)}"
      >
      <ino-chip slot="popover-trigger">Trigger</ino-chip>
    </ino-selection>
`});

export const Controlled = controlledTemplate.generateStoryForProp('controlled', true);
