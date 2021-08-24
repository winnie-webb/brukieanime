import changeEpisode from "./changeEpisode.js";
import renderEpisodeList from "./renderEpisodeList.js";
const loader = document.querySelector(".loader");
async function renderStream() {
  const animeName = window.location.href.split("watch/").pop();
  const currentEpisode = localStorage.getItem(animeName);
  let streamRequest;
  if (currentEpisode == null) {
    const firstEpisodeElement = document.getElementById(`episode-1`);
    firstEpisodeElement.classList.add("current-episode");
    localStorage.setItem(animeName, "1");
    streamRequest = await fetch(`/api/v1/watch/${animeName}-episode-1`);
  }

  streamRequest = await fetch(
    `/api/v1/watch/${animeName}-episode-${currentEpisode}`
  );

  const streamResponse = await streamRequest.json();
  const videoIframe = document.getElementById("video-player");
  const iframeSrc = streamResponse.videoStreamURL;
  videoIframe.src = iframeSrc;
  loader.classList.add("hidden");
  renderEpisodeList(streamResponse);
  const currentEpisodeElement = document.getElementById(
    `episode-${currentEpisode}`
  );
  currentEpisodeElement.classList.add("current-episode");
  changeEpisode();
}
export default renderStream;
