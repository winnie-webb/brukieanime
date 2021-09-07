import changeEpisode from "./changeEpisode.js";
import renderEpisodeList from "./renderEpisodeList.js";
const loader = document.querySelector(".loader");
async function renderStream() {
  const animeName = window.location.href.split("watch/").pop();
  document.title = animeName.toUpperCase();
  // The episode where the user is at is saved in local storage based on the name of anime
  // Example - naruto : 4
  // naruto === anime name whilst 4 === The episode where the user is at
  const currentEpisode = localStorage.getItem(animeName);
  if (currentEpisode == null) {
    localStorage.setItem(animeName, "1");
  }

  const streamRequest = await fetch(
    `/api/v1/watch/${animeName}-episode-${localStorage.getItem(animeName)}`
  );

  const streamResponse = await streamRequest.json();
  const videoIframe = document.getElementById("video-player");
  const iframeSrc = streamResponse.videoStreamURL;
  videoIframe.src = iframeSrc;

  loader.classList.add("hidden");
  renderEpisodeList(streamResponse);

  const firstEpisodeElement = document.getElementById(
    `episode-${localStorage.getItem(animeName)}`
  );
  firstEpisodeElement.classList.add("current-episode");

  const currentEpisodeElement = document.getElementById(
    `episode-${localStorage.getItem(animeName)}`
  );
  currentEpisodeElement.classList.add("current-episode");
  // Change episode is a function that allows users to toggle from episode to episode
  changeEpisode();
}
export default renderStream;
