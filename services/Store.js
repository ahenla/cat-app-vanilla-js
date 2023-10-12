
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

    if (property == "catcart") {
      window.dispatchEvent(new Event("catcartchange"))
    }

    return true
  },

  get(target, property) {
    return target[property]
  }
})

export default proxyStore;
