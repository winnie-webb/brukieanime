const axios = require("axios").default;
const { JSDOM } = require("jsdom");
async function getData(url) {
  try {
    // Fetching data
    const animeDataRequest = await axios.get(url);
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
    console.time("get");
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
    console.timeEnd("get");
    //  Returning data in object format
    const data = {
      animeImages,
      animeNames,
      animeEpisodes,
      animeLinks,
    };
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

module.exports = getData;
