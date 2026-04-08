import { describe, expect, h, it, render } from '@stencil/vitest';

describe('InoControlItem', () => {
  it('should emit checkedChange event when clicked on checkbox with true as detail', async () => {
    const { root, waitForChanges, spyOnEvent } = await render(
      <ino-list>
        <ino-control-item role="checkbox" text="Some Item" />
      </ino-list>,
    );

    const spy = spyOnEvent('checkedChange');

    (root.querySelector('ino-control-item > ino-list-item') as HTMLInoListItemElement).click();
    await waitForChanges();

    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(true);
  });

  it('should emit checkedChange event when clicked on radio-button with true as detail', async () => {
    const { root, waitForChanges, spyOnEvent } = await render(
      <ino-list>
        <ino-control-item role="radio" text="Some Item" />
      </ino-list>,
    );

    const spy = spyOnEvent('checkedChange');

    (root.querySelector('ino-control-item > ino-list-item') as HTMLInoListItemElement).click();
    await waitForChanges();

    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(true);
  });

  it.skip('should emit checkedChange event with false as detail (radio)', async () => {
    const { root, waitForChanges, spyOnEvent } = await render(
      <ino-list>
        <ino-control-item role="radio" text="Some Item" checked={true} />
      </ino-list>,
    );

    const spy = spyOnEvent('checkedChange');

    const radio = root.querySelector('ino-control-item > ino-list-item > ino-radio') as HTMLInoRadioElement;
    radio.shadowRoot?.querySelector('input').dispatchEvent(new InputEvent('false'));
    await waitForChanges();

    expect(spy).toHaveReceivedEvent();
    expect(spy).toHaveReceivedEventDetail(false);
  });

  it('should not emit a checkedChange event if checkbox is disabled', async () => {
    const { root, waitForChanges, spyOnEvent } = await render(
      <ino-list>
        <ino-control-item role="checkbox" text="Some Item" disabled={true} />
      </ino-list>,
    );

    const spy = spyOnEvent('checkedChange');

    (root.querySelector('ino-control-item > ino-list-item') as HTMLInoListItemElement).click();
    await waitForChanges();

    expect(spy).not.toHaveReceivedEvent();
  });

  it('should not emit a checkedChange event if radio-button is disabled', async () => {
    const { root, waitForChanges, spyOnEvent } = await render(
      <ino-list>
        <ino-control-item role="radio" text="Some Item" disabled={true} />
      </ino-list>,
    );

    const spy = spyOnEvent('checkedChange');

    (root.querySelector('ino-control-item > ino-list-item') as HTMLInoListItemElement).click();
    await waitForChanges();

    expect(spy).not.toHaveReceivedEvent();
  });
});
