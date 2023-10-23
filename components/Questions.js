// import { loadCSS } from "../services/functions.js";

export default class QuestionsPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = document.getElementById("questions-page-template");
    const content = template.content.cloneNode(true);

    this.root.appendChild(content);
  }
}

customElements.define("questions-page", QuestionsPage);
