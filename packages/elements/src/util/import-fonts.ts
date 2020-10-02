require('typeface-lato');

// For the angular wrapper
export function importLatoFont() {
  const cssFile = require('typeface-lato').default;
  addCSSToHead(cssFile);
}

function addCSSToHead(css){
  const head = document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.appendChild(document.createTextNode(css));
  head.appendChild(style);
}
