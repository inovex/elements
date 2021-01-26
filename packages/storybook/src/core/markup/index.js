import marked from 'marked';
import './github-markdown.css';

export default (markup) =>
  `<div class="markdown-body">${marked(markup, {
    highlight: function (code, lang) {
      const h = require('highlight.js');
      const res = lang ? h.highlight(lang, code) : h.highlightAuto(code);
      return res.value;
    },
  })}</div>`;
