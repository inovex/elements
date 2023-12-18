class MyTemplate extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <div>
          <slot id="container"></slot>
          <p data-testid="display-value" id=display-value>not set</p>
          <p data-testid="display-second-value" id=display-second-value> not set </p>
        </div>
      `;
  
      this.shadowRoot.appendChild(template.content.cloneNode(true));
  
    
      const container = this.shadowRoot.getElementById('container');
        const displayValue = this.shadowRoot.getElementById('display-value');
        const displaySecondValue = this.shadowRoot.getElementById('display-second-value');
     
  
      
      container.addEventListener('valueChange', (event) => {
        event.target.setAttribute('value', event.detail);
        displayValue.textContent = event.detail;     
      });
        
      container.addEventListener('valueStartChange', (event) => {
        event.target.setAttribute('value-start', event.detail);
        displayValue.textContent = event.detail;     
      });
        
      container.addEventListener('valueEndChange', (event) => {
        event.target.setAttribute('value-end', event.detail);
        displaySecondValue.textContent = event.detail;     
      });
    }
  }
  
  customElements.define('my-template', MyTemplate);
  