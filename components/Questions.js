// import { loadCSS } from "../services/functions.js";

export default class QuestionsPage extends HTMLElement {
  constructor() {
    super()

    this.root = this.attachShadow({ mode: "open" });
  }

  async loadCSS(styles, component) {
    const request = await fetch(`/styles/components/${component}.css`);
    styles.textContent = await request.text()
  }

  connectedCallback() {
    const template = document.getElementById('questions-page-template');
    const content = template.content.cloneNode(true)
    const styles = document.createElement("style");
    this.root.appendChild(styles);

    this.loadCSS(styles, 'questions')

    this.root.appendChild(content)

  }
}

customElements.define("questions-page", QuestionsPage)
