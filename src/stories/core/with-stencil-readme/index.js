import markup from '../markup';

// Import styles for `ino-playground` class
import './styles.scss';

export default componentReadme => storyFn => {
  const splittedReadme = componentReadme.split('<!-- Auto Generated Below -->');
  const header = splittedReadme[0];
  const apiDocs = splittedReadme[1];

  return /*html*/`
    ${markup(header)}
    <div class="ino-playground">${storyFn()}</div>
    ${markup(apiDocs)}
  `;
}