import { loadCSS } from "../services/functions.js";

export default class CatListPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' })

    const styles = document.createElement('style')
    this.root.appendChild(styles)

    loadCSS(styles, 'cat_list')
  }

  connectedCallback() {
    const template = document.getElementById("home-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content)
  }
}

customElements.define("catlist-page", CatListPage)
