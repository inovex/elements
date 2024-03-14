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
