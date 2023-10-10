import { loadCSS } from "../services/functions.js";

export default class AdoptionPage extends HTMLElement {
  constructor() {
    super()

    this.root = this.attachShadow({ mode: 'open' });

    const styles = document.createElement('style');
    this.root.appendChild(styles)

    loadCSS(styles, 'adoption')
  }

  connectedCallback() {
    const template = document.getElementById("adoption-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content)
    //todo add font awesome button
  }
}

customElements.define("adoption-page", AdoptionPage)
