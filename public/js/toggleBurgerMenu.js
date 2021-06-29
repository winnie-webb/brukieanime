function toggleBurgerMenu() {
  const burgerMenu = document.querySelector(".burger-menu");
  const navMenu = document.querySelector(".header__nav");
  const closeMenuButton = document.querySelector(".close-menu");
  burgerMenu.addEventListener("click", () => {
    navMenu.style.display = "flex";
  });
  closeMenuButton.addEventListener("click", () => {
    navMenu.style.display = "none";
  });
}
export default toggleBurgerMenu;
