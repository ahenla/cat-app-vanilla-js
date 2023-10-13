import { removeFromCart } from "../services/functions";

export default class AdoptionItem extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const catItem = JSON.parse(this.dataset.item);

    this.innerHTML = ""

    const template = document.getElementById('adoption-item-template');
    const content = template.content.cloneNode(true);
    this.appendChild(content)

    this.querySelector('.breed').textContent = catItem.breeds[0].name;
    this.querySelector('img').src = catItem.url

    this.querySelector('button').addEventListener('click', event => {
      removeFromCart(catItem.id)
    })
  }
}

customElements.define('adoption-item', AdoptionItem)
