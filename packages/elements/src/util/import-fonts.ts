/// <reference types="css-font-loading-module" />

enum HostedFonts {
  LATO = 'Lato',
}

function checkFont(strFamily: HostedFonts): boolean {
  return document.fonts?.check(`12px ${strFamily}`);
}

function addCSSToHead() {
  const isCSSVarLoaded = Boolean(
    getComputedStyle(document.documentElement).getPropertyValue(
      '--ino-font-family'
    )
  );

  const isLatoLoaded = checkFont(HostedFonts.LATO);

  if (!isCSSVarLoaded && !isLatoLoaded) {
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.appendChild(
      document.createTextNode(
        "@import url('https://static.inovex.de/css/lato.css');"
      )
    );
    document.head.appendChild(style);
  }
}

export default addCSSToHead;
