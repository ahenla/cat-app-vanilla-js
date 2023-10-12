import { loadCSS } from "../services/functions.js";

export default class QuestionsPage extends HTMLElement {
  constructor() {
    super()

    this.root = this.attachShadow({ mode: "open" });

    const styles = document.createElement("style");
    this.root.appendChild(styles);

    loadCSS(styles, 'questions')
  }

  connectedCallback() {
    const template = document.getElementById('questions-page-template');
    const content = template.content.cloneNode(true)

    this.root.appendChild(content)
  }
}

customElements.define("questions-page", QuestionsPage)
