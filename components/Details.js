import { loadCSS } from "../services/functions.js";
import { getCatById } from "../services/functions.js";
import { addToCart } from "../services/functions.js";

export default class DetailsPage extends HTMLElement {
  constructor() {
    super()

    this.root = this.attachShadow({ mode: 'open' });
  }

  async render() {
    if (this.dataset.catId) {
      this.cat = await getCatById(this.dataset.catId);
      this.c = this.cat.breeds[0];
      this.root.querySelector('.temperament').innerHTML = `<strong>temperament:</strong><br> ${this.c.temperament}`
      this.root.querySelector('.breed').innerHTML = `<strong>breed:</strong><br> ${this.c.name}`;
      this.root.querySelector('.description').innerHTML = `<strong>description:</strong><br> ${this.c.description}`
      this.root.querySelector('.lifespan').innerHTML = `<strong>lifespan:</strong><br> ${this.c.life_span} years`
      this.root.querySelector('img').src = this.cat.url
      this.root.querySelector('button').addEventListener('click', event => {
        addToCart(this.cat.id)
        app.router.go('/adoption')
      })
    } else {
      alert("Invalid cat ID")
    }
  }

  connectedCallback() {
    const template = document.getElementById('details-page-template');
    const content = template.content.cloneNode(true)
    this.root.appendChild(content)
    const styles = document.createElement('style')
    this.root.appendChild(styles)

    loadCSS(styles, 'details')

    this.render()
  }
}

customElements.define("details-page", DetailsPage)
