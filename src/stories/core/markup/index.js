import marked from 'marked'
import './github-markdown.css';


// TODO: Add Syntax Highlighter for HTML Code

export default (markup) => `<div class="markdown-body">${marked(markup)}</div>`;