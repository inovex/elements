import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { decorateStoryWithClass } from '../utils';
import { html } from 'lit-html';
import './ino-selection.scss';
import { TemplateGenerator } from '../template-generator';

export default {
  title: 'Input/ino-selection',
  component: 'ino-selection',
  decorators: [(story) => decorateStoryWithClass(story, 'story-ino-selection')],
  args: {
    disabled: false,
    label: 'Select label',
    value: 'Option 1',
    error: false,
    
  },
} as Meta<Components.InoSelection>;

const getOptions = (lenght: number) => {
  const list = [];
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for(let counter = 0; counter < lenght; counter++) {
    let optionString = "";
    for(let i = 0; i < 7; i++){
      optionString += `${characters.charAt(Math.floor(Math.random() * charactersLength))}`;
    }
    list.push(optionString)
  }
  return list;
}


const template = new TemplateGenerator<Components.InoSelection>(
  'ino-select',
  (args) => {
    return html`
      <ino-selection
        disabled="${args.disabled}"
        label="${args.label}"
        value="${args.value}"
        error="${args.error}"
       
      >
      </ino-selection>
      `});
export const Playground = template.generatePlaygroundStory();
