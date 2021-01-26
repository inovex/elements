import markup from '../markup';
import {
  getMermaidMarkdown,
  hasMermaidGraph,
  removeMermaidMarkdown,
  renderMermaid,
} from '../mermaid';

// Import styles for `ino-playground` class
import './styles.scss';

export default (componentReadme) => (storyFn) => {
  const splittedReadme = componentReadme.split('<!-- Auto Generated Below -->');
  const header = splittedReadme[0];
  const apiDocs = splittedReadme[1];

  return /*html*/ `
    ${markup(header)}
    <div class="ino-playground">${storyFn()}</div>
    ${
      hasMermaidGraph(apiDocs)
        ? renderWithMermaid(apiDocs)
        : renderWithtoutDependencies(apiDocs)
    }
  `;
};

const renderWithtoutDependencies = (apiDocs) => /*html*/ `${markup(apiDocs)}`;

function renderWithMermaid(apiDocs) {
  const mermaidGraphMarkdown = getMermaidMarkdown(apiDocs);
  const renderedGraph = renderMermaid(mermaidGraphMarkdown);
  const markupWithoutGraphMarkdown = removeMermaidMarkdown(apiDocs);

  const markupApiDocs = markup(markupWithoutGraphMarkdown);
  const graphHeader = `<h3 id="graph">Graph</h3>`;
  const splittedAtGraphHeader = markupApiDocs.split(graphHeader);

  return /*html*/ `
    ${splittedAtGraphHeader[0]}
    ${graphHeader}
    ${renderedGraph}
    ${splittedAtGraphHeader[1]}
  `;
}
