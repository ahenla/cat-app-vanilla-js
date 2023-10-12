export default class CatItem extends HTMLElement {
  constructor() {
    super()

  }

  connectedCallback() {
    const template = document.getElementById('cat-item-template');
    const content = template.content.cloneNode(true);
    this.appendChild(content)
    console.log('connected');
    const cat = JSON.parse(this.dataset.cat);
    this.querySelector('img').src = cat.url
    this.querySelector('.breed').innerHTML = `<strong>breed:</strong> <br> ${cat.breeds[0].name}`
    this.querySelector('.temperament').innerHTML = `<strong>temperament:</strong> <br> ${cat.breeds[0].temperament}`

    this.querySelector('.card-link').addEventListener('click', event => {
      console.log(event.target.tagName)

      if (event.target.tagName.toLowercCase() == 'button') {
        //todo
      } else {
        app.router.go(`cat-${cat['id']}`)
      }
      event.preventDefault()
    })

  }
}

customElements.define("cat-item", CatItem)
