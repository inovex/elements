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
  // necessary for ssr
  if (typeof window === 'undefined') return;

  const map = getIconMap();
  Object.keys(icons).forEach((name) => map.set(name, icons[name]));
}

export const getSrc = (src: string | undefined) => {
  if (isStr(src)) {
    src = src.trim();
    if (isSrc(src)) {
      return src;
    }
  }
  return null;
};

export const isSrc = (str: string) => str.length > 0 && /(\/|\.)/.test(str);
export const isStr = (val: any): val is string => typeof val === 'string';
