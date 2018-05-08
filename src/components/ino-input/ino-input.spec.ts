import { Input } from './ino-input';
import { flush, render } from '@stencil/core/testing';

describe('ino-input', () => {
  it('should build', () => {
    expect(new Input()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let nativeInputElement;

    beforeEach(async () => {
      element = await render({
        components: [Input],
        html: '<ino-input></ino-input>'
      });
      nativeInputElement = element.querySelector('input');
    });

    describe('properties', () => {
      it('type: should have text by default', () => {
        expect(nativeInputElement.type).toBe('text');
      });

      it('type: should set it out of attribute', async () => {
        const numberElement = await render({
          components: [Input],
          html: '<ino-input type="number"></ino-input>'
        });
        expect(numberElement.querySelector('input').type).toBe('number');
      });

      it('type: should handle updates', async () => {
        element.type = 'number';
        await flush(element);
        expect(nativeInputElement.type).toBe('number');
      });
    });


    // Test of events not possible so far ...
    // describe('events', () => {
    //   it('change: should emit event after keyup', async (done: any) => {
    //    element.addEventListener('change', (value) => {
    //      expect(value).toBe('A');
    //      done();
    //   })
    //   nativeInputElement.value = 'A';
    //   await flush(element);
    // })

    // describe('methods', () => {});

  });
});
