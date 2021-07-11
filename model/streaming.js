const axios = require("axios").default;
const { JSDOM } = require("jsdom");
const getWatchStream = async (url) => {
  try {
    const watchStreamRequest = await axios.get(url);
    const dom = new JSDOM(watchStreamRequest.data);

    const videoStreamURL = dom.window.document
      .querySelector(".anime a")
      .getAttribute("data-video");

    const episodeList =
      dom.window.document.querySelectorAll("#episode_page li a");
    // Episodes Start
    const episodeStart = [];
    episodeList.forEach((episode) => {
      episodeStart.push(episode.getAttribute("ep_start"));
    });
    // Episodes End
    const episodeEnd = [];
    episodeList.forEach((episode) => {
      episodeEnd.push(episode.getAttribute("ep_end"));
    });
    const episodeStartAndEnd = [[...episodeStart], [...episodeEnd]];

    const stream = {
      videoStreamURL,
      episodeStartAndEnd,
    };

    return stream;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = getWatchStream;
