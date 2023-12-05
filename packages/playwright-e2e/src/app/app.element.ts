import './app.element.scss';
import { defineCustomElements } from '@inovex.de/elements/dist/loader';

defineCustomElements();

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {

    defineCustomElements();
    this.innerHTML = `
      <ino-button>HI</ino-button>
      `;
  }
}

customElements.define('app-root', AppElement);
