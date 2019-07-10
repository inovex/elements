let CACHED_MAP: Map<string, string>;

export function getIconMap(): Map<string, string> {
  if (!CACHED_MAP) {
    const win = window as any;
    win.inoIcons = win.inoIcons || {};
    CACHED_MAP = win.inoIcons.map = win.inoIcons.map || new Map();
  }
  return CACHED_MAP;
}

export function addIcons(icons: { [name: string]: string }) {
  const map = getIconMap();
  Object.keys(icons).forEach(name => {
    map.set(name, icons[name]);
  });
}

export function getSrc(src: string | undefined) {
  if (typeof src === 'string') {
    src = src.trim();
    if (isSrc(src)) {
      return src;
    }
  }
  return null;
}

export function isSrc(str: string) {
  return str.length > 0 && /(\/|\.)/.test(str);
}
