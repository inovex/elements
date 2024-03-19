(global as any).MutationObserver = class {
  constructor() {}
  disconnect() {}
  observe() {}
};

jest.mock('@material/textfield', () => ({
  ...jest.requireActual('@material/textfield'),
  MDCTextField: class {
    public focus = jest.fn();
    public destroy = jest.fn();
    public value = '';
  },
}));

global.XMLSerializer = class XmlSerializerWrapper {
  public serializeToString() {
    return '';
  }
};

HTMLInputElement.prototype.checkValidity = jest.fn();
HTMLInputElement.prototype.setSelectionRange = jest.fn();
