import API from "./API.js"

export async function loadCats() {
  const data = API.fetchCats();
  app.store.catlist = data;
}

export async function getCatById(id) {
  if (app.store.catlist == null) {
    await loadCats()
  }

  for (let cat of app.store.catlist) {
    if (cat.id == id) {
      return cat
    } else return null
  }
}
