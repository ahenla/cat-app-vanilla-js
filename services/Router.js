const Router = {
  init: () => {


    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        if (href.startsWith('http')) {
          window.open(href, '_blank')
          // window.location.assign = href
          // window.location.replace = href
        }
        Router.go(href)
      })
    })

    window.addEventListener('popstate', event => {

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
        pageElement = document.createElement('catHome-page');
        break;
      case '/adoption':
        pageElement = document.createElement('adoption-page')
        break;
      case '/questions':
        pageElement = document.createElement('questions-page')
        break;
      default:
        if (route.startsWith("/cat-")) {
          pageElement = document.createElement('details-page')
          pageElement.dataset.catId = route.substring(route.indexOf('-') + 1);
        }
        break
    }

    if (pageElement) {
      document.querySelector('main').innerHTML = "";
      document.querySelector('main').appendChild(pageElement)
    }

    window.scroll(0, 0)
  }
}

export default Router
