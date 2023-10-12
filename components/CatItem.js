export default class CatItem extends HTMLElement {
  constructor() {
    super()

  }

  connectedCallback() {
    const template = document.getElementById('cat-item-template');
    const content = template.cloneNode(true);
    this.appendChild(content)

    const cat = JSON.parse(this.dataset.cat);
    this.querySelector('img').src = cat['url']
    this.querySelector('.breed').src = cat['breed'[0]]['name']
    this.querySelector('.age').src = `${Math.floor(Math.random() * 5) + 1} year(s) old`

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
