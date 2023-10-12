import API from "./API.js"

const Store = {
  catlist: null,
  catcart: []
}

const proxyStore = new Proxy(Store, {
  set(target, property, value) {
    target[property] = value;

    if (property == "catlist") {
      window.dispatchEvent(new Event("catlistchange"))
    }

    if (property == "cart") {
      window.dispatchEvent(new Event("catcartchange"))
    }

    return true
  },

  get(target, property) {
    return target[property]
  }
})

export default Store;
