import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { decorateStoryWithClass } from '../utils';
import { html } from 'lit-html';
import './ino-selection.scss';
import { TemplateGenerator } from '../template-generator';
import { useEffect } from '@storybook/client-api';

export default {
  title: 'Input/ino-selection',
  component: 'ino-selection',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-ino-selection'),
    (story) => {
      useEffect(() => {
        const optionCreatedHandler = (e: any) => {
          const selection: HTMLInoSelectionElement = e.target;
          selection.options.push(e.detail);
        }

        const selectionEls = document.querySelectorAll('ino-selection');
        selectionEls.forEach(el => {
          el.addEventListener('optionCreated', optionCreatedHandler);

          return () => {
            el.removeEventListener('optionCreated', optionCreatedHandler);
          };
        })
        
      });
      return story();
    },
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
    options: ['G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ', 'G19rtWZ', 'hS4H39n', 'ExjSww5', 'd4TCQRi', 'o3TzSar', '236kaJV', 'sa6b1eN', 'z0lIC65', 'kYK8f9W', 'iudHeJO', 'MZwVQcY', 'vycnbCg', 'xtcTPee', '6ap8Drh', '5357cWY', 'gECnm4K', 'EoxR3p0', 'lWDWdb0', '5d0k2EY', 'jrnu5pJ'],
    displayAddOption: true,
    emptyInputMessage: 'Type to add new option',
    createOptionLabel: '',
  },
} as Meta<Components.InoSelection>;


const template = new TemplateGenerator<Components.InoSelection>(
'ino-select',
(args) => {
  return html`
    <ino-selection
      disabled="${args.disabled}"
      label="${args.label}"
      value="${args.value}"
      error="${args.error}"
      display-add-option="${args.displayAddOption}"
      .options="${args.options}"
      empty-input-message="${args.emptyInputMessage}"
      create-option-label="${args.createOptionLabel}"
    >
    </ino-selection>
`});

export const Playground = template.generatePlaygroundStory();
