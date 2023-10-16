import { loadCSS } from "../services/functions.js";

export default class AdoptionPage extends HTMLElement {
  constructor() {
    super()

    this.root = this.attachShadow({ mode: 'open' });
    const template = document.getElementById("adoption-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content)

    const styles = document.createElement('style');
    this.root.appendChild(styles)

    loadCSS(styles, 'adoption')
  }

  render() {
    const adoptionList = this.root.querySelector('.adoption-list');
    adoptionList.innerHTML = "";

    if (app.store.catcart.length == 0) {
      adoptionList.innerHTML = "<li>Your adoption basket is empty</li>"
    }
    else {
      for (let cat of app.store.catcart) {
        const catItem = document.createElement("adoption-item");
        const liElement = document.createElement('li')
        catItem.dataset.item = JSON.stringify(cat)
        liElement.classList.add('adoption-card')
        liElement.appendChild(catItem)
        adoptionList.appendChild(liElement)
      }
    }
  }

  connectedCallback() {
    window.addEventListener("catcartchange", () => {
      this.render()
    })
    this.render()
  }
}

customElements.define("adoption-page", AdoptionPage)
