import { generateEpisodes } from "./generateEpisodes.js";
const renderEpisodeList = (streamResponse) => {
  const episodeStartAndEnd = streamResponse.episodeStartAndEnd;
  // Please console.log(episodeStartAndEnd) to fully understand the values
  const episodeStart = episodeStartAndEnd[0];
  const episodeEnd = episodeStartAndEnd[1];

  const episodesWrapper = document.querySelector(".episodes__wrapper");
  const episodesTabWrapper = document.querySelector(".episodes__tabWrapper");

  // !!!!
  // Reminder - check which tab user is supposed to be
  // !!!!

  //  Create Episode Tabs
  episodeEnd.forEach((currentTabEpisodeEnd, index) => {
    const episodeTab = document.createElement("span");
    episodeTab.textContent = `${episodeStart[index]} - ${currentTabEpisodeEnd}`;
    episodeTab.setAttribute("ep_start", episodeStart[index]);
    episodeTab.setAttribute("ep_end", currentTabEpisodeEnd);
    episodeTab.addEventListener("click", () => {
      episodesWrapper.innerHTML = null;
      const numberOfEpisodesToGenerate = parseInt(
        episodeTab.getAttribute("ep_end")
      );

      const startEpisode = parseInt(episodeTab.getAttribute("ep_start"));
      generateEpisodes(
        startEpisode,
        numberOfEpisodesToGenerate,
        episodesWrapper
      );
    });
    episodesTabWrapper.append(episodeTab);
  });

  // Create Episodes Tabs  c
  const initialNumberOfEpisodes = parseInt(episodeEnd[0]);
  generateEpisodes(1, initialNumberOfEpisodes, episodesWrapper);
};
export default renderEpisodeList;
