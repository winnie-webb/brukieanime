const handleTogglePages = async (renderAnime) => {
  const type = document.querySelector(".current-type");
  const toggleForwardElement = document.querySelector(".toggle-forwards");
  const toggleBackwardElement = document.querySelector(".toggle-backwards");

  toggleForwardElement.addEventListener("click", togglePageForward);
  toggleBackwardElement.addEventListener("click", togglePageBackward);

  async function togglePageForward() {
    const currentPageElement = document.querySelector(".current-page");
    const currentPage = parseInt(currentPageElement.textContent);
    if (currentPage >= 301) return;

    // Render Anime List

    const newCurrentPage = currentPage + 1;
    currentPageElement.textContent = newCurrentPage;
    await renderAnime(newCurrentPage, type);
  }
  async function togglePageBackward() {
    const currentPageElement = document.querySelector(".current-page");
    const currentPage = parseInt(currentPageElement.textContent);
    if (currentPage <= 1) return;

    // Render Anime List

    const newCurrentPage = currentPage - 1;
    currentPageElement.textContent = newCurrentPage;
    await renderAnime(newCurrentPage, type);
  }
};

export default handleTogglePages;
