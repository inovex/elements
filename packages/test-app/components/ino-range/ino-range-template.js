class MyTemplate extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: 'open' });
  
      // Create a template element
      const template = document.createElement('template');
      template.innerHTML = `
        <div>
          <slot id="container"></slot>
          <p data-testid="display-value" id=display-value>not set</p>
          <p data-testid="display-second-value" id=display-second-value> not set </p>
        </div>
      `;
  
      // Append the template content to the shadow DOM
      this.shadowRoot.appendChild(template.content.cloneNode(true));
  
      // Use this.shadowRoot to query elements within the shadow DOM
      const container = this.shadowRoot.getElementById('container');
        const displayValue = this.shadowRoot.getElementById('display-value');
        const displaySecondValue = this.shadowRoot.getElementById('display-second-value');
      //const button = this.shadowRoot.querySelector('ino-segment-button'); TODO: Ohne shadow dom?
  
      
      container.addEventListener('valueChange', (event) => {
        event.target.setAttribute('value', event.detail);
        displayValue.textContent = event.detail;     
      });
        
      container.addEventListener('valueStartChange', (event) => {
        event.target.setAttribute('valueStart', event.detail);
        displayValue.textContent = event.detail;     
      });
        
      container.addEventListener('valueEndChange', (event) => {
        event.target.setAttribute('valueEnd', event.detail);
        displaySecondValue.textContent = event.detail;     
      });
    }
  }
  
  // Define the custom element tag
  customElements.define('my-template', MyTemplate);
  