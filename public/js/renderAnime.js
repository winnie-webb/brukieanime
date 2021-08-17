import renderAnimeView from "./renderAnimeView.js";
async function renderAnime() {
  const wrapper = document.querySelector(".anime-tab__listWrapper");
  const animePage = document.querySelector(".current-page").textContent;
  const animeType = document.querySelector(".current-type").textContent;

  wrapper.innerHTML = null;
  // Add loader
  const loader = document.createElement("div");
  loader.className = "loader";
  wrapper.append(loader);
  try {
    const animeRequest = await fetch(`/api/v1/${animeType}?page=${animePage}`);
    const animeResponse = await animeRequest.json();
    renderAnimeView(animeResponse);
    loader.remove();
  } catch (err) {
    wrapper.innerHTML = null;
    console.log(err);
    wrapper.textContent = `Error: Please check your internet connection.`;
  }
}
export default renderAnime;
