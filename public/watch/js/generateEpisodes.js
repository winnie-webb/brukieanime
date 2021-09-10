import changeEpisode from "./changeEpisode.js";
export function generateEpisodes(
  startEpisode,
  numberOfEpisodes,
  episodesWrapper
) {
  if (startEpisode === 0) startEpisode = 1;
  const generateArrayOfNumbers = (start, end) => {
    let array = [];
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
    return array;
  };
  const episodesInTab = generateArrayOfNumbers(startEpisode, numberOfEpisodes);

  episodesInTab.forEach((ep) => {
    const episodeList = document.createElement("li");
    episodeList.classList.add("episodes__episode");
    episodeList.textContent = ep;
    episodeList.id = `episode-${ep}`;
    episodesWrapper.append(episodeList);
  });
  changeEpisode();

  const animeName = window.location.href.split("watch/").pop();
  const currentEpisodeElement = document.getElementById(
    `episode-${localStorage.getItem(animeName)}`
  );
  currentEpisodeElement.classList.add("current-episode");
}
