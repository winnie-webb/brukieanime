import renderAnimeView from "./renderAnimeView.js";
async function searchAnime(e) {
  const wrapper = document.querySelector(".anime-tab__listWrapper");
  wrapper.innerHTML = null;
  // Add loader
  const loader = document.createElement("div");
  loader.className = "loader";
  wrapper.append(loader);
  const keyword = e.target.value;
  const animeDataRequest = await fetch(`/api/v1/search?keyword=${keyword}`);
  const animeResponse = await animeDataRequest.json();
  renderAnimeView(animeResponse);
  loader.remove();
}

export default searchAnime;
