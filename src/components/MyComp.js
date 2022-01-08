import './title/Title.js';

class Counter extends HTMLElement {
  constructor() {
    super();

    let _counter = 0;

    const shadowRoot = this.attachShadow({ mode: 'open' });
    const content = this.createTemplate.call(this, _counter);

    this.registerEvents.call(this, _counter);

    shadowRoot.appendChild(content.cloneNode(true));
  }

  createTemplate(counter) {
    const template = document.createElement('template');

    template.innerHTML = `<div>
        <div><title-component /></div>
        <button id='incrementButton'>counter</button>
        <div id='counter'>Times clicked: ${counter}</div>
    </div>`;

    return template.content;
  }

  registerEvents(counter) {
    this.shadowRoot.addEventListener('click', function (event) {
      const counterDiv = document.querySelector('my-counter-comp').shadowRoot.querySelector('#counter');

      counter++;

      counterDiv.textContent = `Times clicked: ${counter}`;
    });
  }
}

customElements.define('my-counter-comp', Counter);
