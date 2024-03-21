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

jest.mock('@material/textfield', () => ({
  ...jest.requireActual('@material/textfield'),
  MDCTextField: class {
    public focus = jest.fn();
    public destroy = jest.fn();
    public value = '';
  },
}));
