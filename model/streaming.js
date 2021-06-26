const axios = require("axios").default;
const { JSDOM } = require("jsdom");
const getWatchStream = async (url) => {
  const watchStreamRequest = await axios.get(url);
  const dom = new JSDOM(watchStreamRequest.data);

  const videoStreamURL = dom.window.document
    .querySelector(".anime_muti_link .anime a[data-video]")
    .getAttribute("data-video");

  let episodeList = [];
  const episodeListHTML = dom.window.document.querySelectorAll(
    "#episode_related li a .name"
  );
  episodeListHTML.forEach((episode) => {
    episodeList.push("1");
  });
  const watchStream = {
    videoStreamURL,
    episodeList,
  };

  return watchStream;
};

module.exports = getWatchStream;
