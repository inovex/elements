import { Components, KeyValue } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { decorateStoryWithClass } from '../utils';
import { html } from 'lit-html';
import './ino-selection.scss';
import { TemplateGenerator } from '../template-generator';

const options = ['G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ'];

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

const createChip = (content: string, parentEl: Element | null) => {
  if(parentEl && content) {
    const chip = document.createElement("ino-chip") as HTMLInoChipElement;
    chip.innerText = `${content}`;
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
  createChip(e.detail as string, parentEl);
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
      <ino-chip slot="popover-trigger">Trigger</ino-chip>
    </ino-selection>
`});

export const Playground = template.generatePlaygroundStory();


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
