import marked from 'marked'
import { withDocs } from 'storybook-readme';

import rawStoryTemplate from './template.md'

// Import styles for `ino-playground` class
import './styles.scss'

export default (componentReadme) => {
  let template = rawStoryTemplate;

  const splittedReadme = componentReadme.split('<!-- Auto Generated Below -->');
  const header = splittedReadme[0];
  const apiDocs = splittedReadme[1];

  template = template.replace('<!-- DOC_HEADER -->', header);
  template = template.replace('<!-- API_DOCS -->', apiDocs);
  
  const withDocsCustom = withDocs({
    PreviewComponent: {
      template: `<div class="ino-playground"><slot></slot></div>`,
    },
  });
  return withDocsCustom(template);
}