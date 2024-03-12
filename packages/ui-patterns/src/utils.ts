export function setupEventListener(
  container: HTMLElement,
  selector: string,
  eventType: string,
  detailAttribute: 'value' | 'checked' | 'active-tab' | 'expanded' | 'open',
  callback?: (ev: Event) => void,
) {
  const element = container.querySelector(selector);

  if (!element)
    throw new Error(
      `Event-Listener could not be set up. The elements could not be queried by '${selector}'.`,
    );

  const eventHandler = (e: Event) => {
    const customEvent = e as CustomEvent;
    element.setAttribute(detailAttribute, customEvent.detail);

    if (callback) callback(e);
  };

  element.addEventListener(eventType, eventHandler);
  return () => element.removeEventListener(eventType, eventHandler);
}
