class Title extends HTMLElement {
  constructor() {
    super();

    let _counter = 0;

    const shadowRoot = this.attachShadow({ mode: 'open' });
    const content = this.createTemplate();

    shadowRoot.appendChild(content.cloneNode(true));
  }

  createTemplate() {
    const template = document.createElement('template');

    template.innerHTML = `<div id="titleElement">Title is here!!!</div>`;

    return template.content;
  }
}

customElements.define('title-component', Title);
