(global as any).MutationObserver = class {
  constructor() {}
  disconnect() {}
  observe() {}
};

HTMLInputElement.prototype.checkValidity = jest.fn();
HTMLInputElement.prototype.setSelectionRange = jest.fn();

jest.mock('@material/textfield');
