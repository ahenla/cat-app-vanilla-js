import API from "./API.js"

export async function loadCats() {
  const data = API.fetchCats();
  app.store.catlist = data;
}
