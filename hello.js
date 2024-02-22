class HelloComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `<h1>hello</h1>`;
  }
}
customElements.define("hello-component", HelloComponent);
