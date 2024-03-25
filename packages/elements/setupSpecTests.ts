(global as any).MutationObserver = class {
  constructor() {}
  disconnect() {}
  observe() {}
};

HTMLInputElement.prototype.checkValidity = jest.fn();
HTMLInputElement.prototype.setSelectionRange = jest.fn();

global.XMLSerializer = class XmlSerializerWrapper {
  public serializeToString() {
    return '';
  }
};

jest.mock('@material/textfield');
