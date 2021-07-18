import changeEpisode from "./changeEpisode.js";
import renderEpisodeList from "./renderEpisodeList.js";
const loader = document.querySelector(".loader");
async function renderStream() {
  const animeName = window.location.href.split("watch/").pop();

  const streamRequest = await fetch(`/api/v1/watch/${animeName}-episode-1`);
  const streamResponse = await streamRequest.json();
  const videoIframe = document.getElementById("video-player");
  const iframeSrc = streamResponse.videoStreamURL;
  videoIframe.src = iframeSrc;
  loader.classList.add("hidden");
  renderEpisodeList(streamResponse);
  changeEpisode();
}
export default renderStream;
