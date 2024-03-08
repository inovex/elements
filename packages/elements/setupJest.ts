jest.mock('@material/textfield');

(global as any).ClipboardEvent = jest.fn();
(global as any).DragEvent = jest.fn();
(global as any).MutationObserver = class {
  constructor() {}
  disconnect() {}
  observe() {}
};
