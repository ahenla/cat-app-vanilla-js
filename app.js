import Store from "./services/Store.js"
import API from "./services/API.js"
import Router from "./services/Router.js"
import { loadCats } from "./services/CatList.js";


window.app = {
  store: Store,
  router: Router
}

window.addEventListener("DOMContentLoaded", () => {
  console.log('Dom is loaded');
  app.router.init()
  loadCats();
})
