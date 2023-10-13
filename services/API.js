const API = {
  url: "/cats.json",

  fetchCats: async () => {
    const results = await fetch(API.url);
    return await results.json();
  }
}

export default API;
