import API from "./API.js"

//load data from json
export async function loadCats() {
  app.store.catlist = await API.fetchCats();
}

//find cat in the store
export async function getCatById(id) {
  if (app.store.catlist == null) {
    await loadCats()
  }

  for (let cat of app.store.catlist) {
    if (cat.id == id) {
      return cat
    }
  }
  return null
}

//load css
export async function loadCSS(styles, component) {
  const request = await fetch(`/styles/components/${component}.css`);
  styles.textContent = await request.text()
}

//add cat to cart
export async function addToCart(id) {
  const cat = await getCatById(id)

  if (app.store.catcart.find(catInCart => catInCart.id == id)) {
    alert("this cat is already in the adoption list")
  } else {
    app.store.catcart = [...app.store.catcart, cat]
  }
}

//remove cat from cart

export function removeFromCart(id) {
  app.store.catcart = app.store.catcart.filter(catInCart => catInCart.id != id)
}
