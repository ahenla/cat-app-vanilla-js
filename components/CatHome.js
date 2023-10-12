import { loadCSS } from "../services/functions.js";

export default class CatHomePage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' })

    const styles = document.createElement('style')
    this.root.appendChild(styles)

    loadCSS(styles, 'cat_home')
  }

  connectedCallback() {
    const template = document.getElementById("home-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content)

    window.addEventListener("catlistchange", () => {
      this.render()
    })
    this.render()
  }

  render() {
    const list = this.root.getElementById('cat-list')

    if (app.store.catlist) {
      list.innerHTML = "<h1>Cat List</h1>"

      for (let cat of app.store.menu) {
        const liItem = document.createElement('li');
        const catItem = document.createElement('cat-item')
        catItem.dataset.cat = JSON.stringify(cat)
        liItem.appendChild(catItem)
        list.appendChild(liItem)
      }
    } else {
      list.innerHTML = "Loading 😼"
    }
  }
}

customElements.define("cathome-page", CatHomePage)
