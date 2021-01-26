import mermaid from 'mermaid';

const mermaidStart = '```mermaid';

export const hasMermaidGraph = (content) => content.includes(mermaidStart);

export function getMermaidMarkdown(content) {
  const mermaidStart = 'graph TD;';
  const mermaidEnd = '```';

  const mermaidStartIndex = content.indexOf(mermaidStart);
  const mermaidEndIndex = content.indexOf(mermaidEnd, mermaidStartIndex);

  return content.substring(mermaidStartIndex, mermaidEndIndex);
}

export function removeMermaidMarkdown(content) {
  const mermaidEnd = '```';

  const mermaidStartIndex = content.indexOf(mermaidStart);
  const mermaidEndIndex = content.indexOf(
    mermaidEnd,
    mermaidStartIndex + mermaidStart.length
  );

  return (
    content.substring(0, mermaidStartIndex) +
    content.substring(mermaidEndIndex + mermaidEnd.length)
  );
}

export function renderMermaid(markdown) {
  return mermaid.render('dependency-graph', markdown);
}
