// import { loadCSS } from "../services/functions.js";
import { addToCart } from "../services/functions.js";

export default class CatHomePage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });
  }

  // async loadCSS(styles, component) {
  //   const request = await fetch(`/styles/components/${component}.css`);
  //   styles.textContent = await request.text()
  // }

  connectedCallback() {
    const template = document.getElementById("home-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    // const styles = document.createElement('style')
    // this.root.appendChild(styles)

    // this.loadCSS(styles, 'cat_home')

    window.addEventListener("catlistchange", () => {
      this.render();
    });
    this.render();
  }

  render() {
    const list = this.root.getElementById("cat-list");
    list.innerHTML = "";

    if (app.store.catlist) {
      for (let cat of app.store.catlist) {
        const liItem = document.createElement("li");
        const catItem = document.createElement("cat-item");
        catItem.dataset.cat = JSON.stringify(cat);
        liItem.appendChild(catItem);
        list.appendChild(liItem);
      }
    } else {
      list.innerHTML = "Loading 😼...";
    }
  }
}

customElements.define("cathome-page", CatHomePage);
