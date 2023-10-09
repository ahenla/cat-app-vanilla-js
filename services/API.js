const API = {
  url: "https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_Y4baB3EQKrv64N003pQxWFwWLal7YoKGFydjs9yuvMBP0cqX3Nk8CjEnI7G6XcBd",

  fetchCats: async () => {
    const results = await fetch(API.url);
    return await results.json();
  }
}

export default API;
