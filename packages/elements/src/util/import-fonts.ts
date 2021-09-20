function checkFont(strFamily) {
  return (document as any)?.fonts?.check(`12px ${strFamily}`) || false;
}

function addCSSToHead() {
  const fontFamily = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--ino-font-family');
  console.log(checkFont('Lato'));
  if (!fontFamily && !checkFont('Lato')) {
    const head = document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.appendChild(
      document.createTextNode(
        "@import url('https://static.inovex.de/css/lato.css');"
      )
    );
    head.appendChild(style);
  }
}

export default function () {
  addCSSToHead();
}
