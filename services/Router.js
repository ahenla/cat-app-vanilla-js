const Router = {
  init: () => {
    console.log('router initialized');

    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        Router.go(href)
      })
    })

    window.addEventListener('popstate', event => {
      console.log(event.state.route);
      Router.go(event.state.route, false)
    })
    //initial url
    Router.go(location.pathname)
  },

  go: (route, addToHistory = true) => {
    console.log(`route to ${route}`);

    if (addToHistory) {
      history.pushState({ route }, '', route)
    }

    let pageElement = null;

    switch (route) {
      case '/':
        pageElement = document.createElement('h1');
        pageElement.textContent = "Cat List";
        break;
      case '/adoption':
        pageElement = document.createElement('h1')
        pageElement.textContent = "Adoption page";
        break;
      case '/questions':
        pageElement = document.createElement('h1')
        pageElement.textContent = "Common Questions";
        break;
      // default:
      //   if (route.startsWith("/cat-")) {
      //     pageElement = document.createElement('h1')
      //     pageElement.textContent = "details"
      //     pageElement.dataset.catID = route.substring(route.lastIndexOf('-') + 1)
      //   }
      //   break
    }

    if (pageElement) {
      document.querySelector('main').innerHTML = "";
      document.querySelector('main').appendChild(pageElement)
    }

    window.scrollX = 0
    window.scrollY = 0
  }
}

export default Router
