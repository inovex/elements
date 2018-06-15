import marked from 'marked'
import { withDocs } from 'storybook-readme';

import rawStoryTemplate from './raw-story.template.md'

export default (componentReadme) => {
  let template = rawStoryTemplate;

  const splittedReadme = componentReadme.split('<!-- Auto Generated Below -->');
  const header = splittedReadme[0];
  const apiDocs = splittedReadme[1];

  template = template.replace('<!-- DOC_HEADER -->', header);
  template = template.replace('<!-- API_DOCS -->', apiDocs);

  return withDocs(template);
}