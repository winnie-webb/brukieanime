const renderEpisodeList = (streamResponse) => {
  let currentTab = 0;
  const episodeStartAndEnd = streamResponse.episodeStartAndEnd;
  const episodeStart = episodeStartAndEnd[0];
  const episodeEnd = episodeStartAndEnd[1];

  const episodesWrapper = document.querySelector(".episodes__wrapper");
  const episodesTabWrapper = document.querySelector(".episodes__tabWrapper");

  //  Create Episode Tabs
  episodeEnd.forEach((ep, index) => {
    const episodeTab = document.createElement("span");
    episodeTab.textContent = `${episodeStart[index]} - ${ep}`;
    episodesTabWrapper.append(episodeTab);
  });
  // Create Episodes Tabs
  Array.from({ length: 10 }, (_, i) => i + 1);

  const episodesInTab = Array.from(
    Array.from(Array(parseInt(episodeEnd[currentTab])), (_, i) => i + 1)
  );

  episodesInTab.forEach((ep, index) => {
    const episodeList = document.createElement("li");
    episodeList.classList.add("episodes__episode");
    episodeList.textContent = ep;
    if (index === 0) episodeList.classList.add("current-episode");
    episodesWrapper.append(episodeList);
  });
};
export default renderEpisodeList;
