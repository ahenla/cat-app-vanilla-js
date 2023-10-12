import { loadCSS } from "../services/functions.js";
import { getCatById } from "../services/CatList.js";

export default class DetailsPage extends HTMLElement {
  constructor() {
    super()

    this.root = this.attachShadow({ mode: 'open' });

    const styles = document.createElement('details-page')
    this.root.appendChild(styles)

    loadCSS(styles, 'details')
  }

  connectedCallack() {
    const template = document.getElementById("details-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content)
  }
}

customElements.define("details-page", DetailsPage)
