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

HTMLInputElement.prototype.checkValidity = jest.fn();
HTMLInputElement.prototype.setSelectionRange = jest.fn();

jest.mock('@material/textfield');
