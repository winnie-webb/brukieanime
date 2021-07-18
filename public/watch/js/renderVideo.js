const loader = document.querySelector(".loader");
const renderVideo = async (currentEpisode) => {
  const videoIframe = document.getElementById("video-player");
  videoIframe.src = "";
  loader.classList.remove("hidden");
  const animeName = window.location.href.split("watch/").pop();

  const streamRequest = await fetch(
    `/api/v1/watch/${animeName}-episode-${currentEpisode}`
  );
  const streamResponse = await streamRequest.json();
  const iframeSrc = streamResponse.videoStreamURL;
  videoIframe.src = iframeSrc;
  loader.classList.add("hidden");
};

export default renderVideo;
