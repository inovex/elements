await import('./dist/inovex-elements/inovex-elements.esm.js');

(global as any).MutationObserver = class {
  constructor() {}
  disconnect() {}
  observe() {}
};

global.XMLSerializer = class XmlSerializerWrapper {
  public serializeToString() {
    return '';
  }
};

export {};
