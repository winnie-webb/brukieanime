async function renderAnime() {
  const wrapper = document.querySelector(".anime-tab__listWrapper");
  const animePage = document.querySelector(".current-page").textContent;
  const animeType = document.querySelector(".current-type").textContent;
  wrapper.innerHTML = null;
  const loader = document.createElement("div");
  loader.className = "loader";
  wrapper.append(loader);
  try {
    const animeRequest = await fetch(`/api/v1/${animeType}?page=${animePage}`);
    const animeResponse = await animeRequest.json();
    //   Remove Loader
    loader.remove();

    const { animeImages, animeNames, animeEpisodes, animeLinks } =
      animeResponse.data;

    animeImages.forEach((image, index) => {
      const listWrapper = document.createElement("li");
      listWrapper.className = "anime-tab__list";
      const linkWrapper = document.createElement("a");
      linkWrapper.href = animeLinks[index];
      const img = document.createElement("img");
      img.src = image;
      const animeName = document.createElement("a");
      animeName.textContent = animeNames[index];
      animeName.href = animeLinks[index];
      animeName.className = "anime-name";
      const animeEpisode = document.createElement("p");
      animeEpisode.textContent = animeEpisodes[index];
      listWrapper.append(linkWrapper);
      listWrapper.append(animeEpisode);
      linkWrapper.append(img);
      linkWrapper.append(animeName);
      wrapper.append(listWrapper);
    });
  } catch (err) {
    loader.remove();
    wrapper.textContent = `Error: Please check your internet connection.`;
  }
}
export default renderAnime;
