class MyTemplate extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    // Create a template element
    const template = document.createElement('template');
    template.innerHTML = `
      <div>
        <slot id="container"></slot>
        <p id="display-value">not checked</p>
      </div>
    `;

    // Append the template content to the shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Use this.shadowRoot to query elements within the shadow DOM
    const container = this.shadowRoot.getElementById('container');
    const displayValue = this.shadowRoot.getElementById('display-value');
    //const button = this.shadowRoot.querySelector('ino-segment-button'); TODO: Ohne shadow dom?

    
    container.addEventListener('checkedChange', (event) => {
      event.target.setAttribute('checked', event.detail);
      displayValue.textContent = event.detail;     
    });
  }
}

// Define the custom element tag
customElements.define('my-template', MyTemplate);
