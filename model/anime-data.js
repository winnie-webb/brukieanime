const axios = require("axios").default;
const { JSDOM } = require("jsdom");
async function getData(url, page) {
  try {
    // Fetching data
    const pageToFetch = `${url}?page=${page}`;
    const animeDataRequest = await axios.get(pageToFetch);
    const base = `.film-list .item .inner`;

    let animeImages = [];
    let animeNames = [];
    let animeEpisodes = [];
    let animeLinks = [];

    // Selecting Elements From Page
    const dom = new JSDOM(animeDataRequest.data);
    const animeImagesHTML = dom.window.document.querySelectorAll(
      `${base} a img`
    );

    const animeEpisodesHTML = dom.window.document.querySelectorAll(
      `${base} .status .ep`
    );

    const animeNamesHTML = dom.window.document.querySelectorAll(
      `${base} .name`
    );

    const animeLinksHTML = dom.window.document.querySelectorAll(
      `${base} .poster`
    );

    // Retrieving needed content
    animeImagesHTML.forEach((image) => {
      animeImages.push(image.src);
    });
    animeNamesHTML.forEach((name) => {
      animeNames.push(name.textContent);
    });
    animeEpisodesHTML.forEach((episode) => {
      animeEpisodes.push(episode.textContent);
    });
    animeLinksHTML.forEach((link) => {
      animeLinks.push(link.href.slice(22));
    });

    //  Returning data in object format
    const data = {
      animeImages,
      animeNames,
      animeEpisodes,
      animeLinks,
    };
    return data;
  } catch (err) {
    return null;
  }
}

module.exports = getData;
