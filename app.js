import Store from "./services/Store.js"
import API from "./services/API.js"
import Router from "./services/Router.js"
import { loadCats } from "./services/CatList.js";

//import components
import CatHometPage from "./components/CatHome.js";
import DetailsPage from "./components/Details.js";
import AdoptionPage from "./components/Adoption.js";
import QuestionsPage from "./components/Questions.js";
import CatItem from "./components/CatItem.js";


window.app = {
  store: Store,
  router: Router
}

window.addEventListener("DOMContentLoaded", async () => {
  console.log('Dom is loaded');
  loadCats();
  app.router.init()
})
