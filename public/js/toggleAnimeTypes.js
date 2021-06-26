async function toggleAnimeTypes(renderAnime) {
  const togglers = document.querySelectorAll(".anime-type");
  const currentPageElement = document.querySelector(".current-page");
  const newCurrentPage = 1;

  togglers.forEach((toggler) => {
    toggler.addEventListener("click", async () => {
      togglers.forEach((toggled) => toggled.classList.remove("current-type"));
      toggler.classList.add("current-type");
      // Render Anime and change current page to first page
      const type = toggler.textContent.toLowerCase();
      currentPageElement.textContent = newCurrentPage;

      await renderAnime(newCurrentPage, type);
    });
  });
}

export default toggleAnimeTypes;
