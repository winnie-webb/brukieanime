function toggleSearchBar() {
  // Toggle searching
  const searchBarWrapper = document.querySelector(".search__barWrapper");
  const searchBar = document.querySelector(".search__bar");
  // Selecting  Togglers
  const searchIconToggler = document.querySelector(".search__barIcon__wrapper");
  const searchBarCloser = document.querySelector(".search__barCloseMenu");

  const headerLogo = document.querySelector(".header__logo");
  const burgerMenu = document.querySelector(".burger-menu");

  function toggleElements() {
    headerLogo.classList.toggle("hidden");
    burgerMenu.classList.toggle("hidden");
    searchBarCloser.classList.toggle("hidden");
    searchBarWrapper.style.display = "flex";
  }
  searchIconToggler.addEventListener("click", () => {
    toggleElements();
    searchBar.style.display = "block";
  });

  //   Toggle not searching
  const closeSearchBar = document.querySelector(".close-menu");
  closeSearchBar.addEventListener("click", () => {
    toggleElements();
    searchBar.style.display = "none";
  });
}
export default toggleSearchBar;
