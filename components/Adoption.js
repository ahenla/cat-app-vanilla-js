import { loadCSS, removeFromCart } from "../services/functions.js";

export default class AdoptionPage extends HTMLElement {

  #user = {
    name: '',
    address: '',
    phone: '',
    email: ''
  }

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

    this.formBinding(this.root.querySelector('form'))
  }

  formBinding(form) {
    form.addEventListener('submit', event => {
      event.preventDefault()
      alert(`Thank You ${this.#user.name}, You will soon receive an
      email to ${this.#user.email} with the details of the adoption.`)

      this.#user.name = ''
      this.#user.address = ''
      this.#user.phone = ''
      this.#user.email = ''

      app.store.catcart = []
    })

    Array.from(form.elements).forEach((field) => {
      if (field.name) {
        field.addEventListener('change', () => {
          this.#user[field.name] = field.value
        })
      }
    })

    this.#user = new Proxy(this.#user, {
      set(target, property, value) {
        target[property] = value
        form.elements[property].value = value
        return true
      }
    })
  }

  connectedCallback() {
    window.addEventListener("catcartchange", () => {
      this.render()
    })
    this.render()
  }
}

customElements.define("adoption-page", AdoptionPage)
