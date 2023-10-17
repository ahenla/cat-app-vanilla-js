import Store from "./services/Store.js"
import API from "./services/API.js"
import Router from "./services/Router.js"
import { loadCats } from "./services/functions.js";

//import components
import CatHometPage from "./components/CatHome.js";
import DetailsPage from "./components/Details.js";
import AdoptionPage from "./components/Adoption.js";
import QuestionsPage from "./components/Questions.js";
import CatItem from "./components/CatItem.js";
import AdoptionItem from "./components/AdoptionItem.js";


window.app = {
  store: Store,
  router: Router
}

window.addEventListener("DOMContentLoaded", async () => {
  loadCats();
  app.router.init()
})

window.addEventListener("catcartchange", () => {
  const badge = document.getElementById('badge');
  badge.textContent = app.store.catcart.length;
  badge.hidden = app.store.catcart.length == 0;
})
