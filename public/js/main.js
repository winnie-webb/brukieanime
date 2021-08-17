// Anime Components
import togglePages from "./togglePages.js";
import toggleAnimeTypes from "./toggleAnimeTypes.js";
import renderAnime from "./renderAnime.js";
import renderTop10 from "./renderTop10.js";
import searchAnime from "./searchAnime.js";
renderAnime(1, "updated");
renderTop10();
togglePages(renderAnime);
toggleAnimeTypes(renderAnime);

// Burger
import toggleBurgerMenu from "./toggleBurgerMenu.js";

toggleBurgerMenu();
// Search Bar

import toggleSearchBar from "./toggleSearchbar.js";
toggleSearchBar();

const searchInput = document.querySelector(".search__bar");
searchInput.addEventListener("input", (e) => searchAnime(e));
