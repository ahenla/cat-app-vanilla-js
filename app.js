import Store from "./services/Store.js"
import API from "./services/API.js"


window.app = {
  store: Store
}

window.addEventListener("DOMContentLoaded", () => {
  console.log('Dom is loaded');
})
