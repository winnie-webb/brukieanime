let episode = 1;
const videoIframe = document.getElementById("video-player");
const videoWrapper = document.querySelector(".section-video");
const renderVideo = async () => {
  const animeName = window.location.href.split("watch/").pop();
  const iframeSrcRequest = await fetch(
    `/api/v1/watch/${animeName}-episode-${episode}`
  );
  const iframeSrcResponse = await iframeSrcRequest.json();
  console.log(iframeSrcResponse);
  const iframeSrc = iframeSrcResponse.watchStream.videoStreamURL.replace(
    "/",
    "https:/"
  );
  videoIframe.src = iframeSrc;

  const renderEpisodeList = () => {
    iframeSrcResponse.watchStream.episodeList.forEach((episode) => {
      const li = document.createElement("li");
      li.textContent = episode.title;
      videoWrapper.append(li);
    });
  };
  renderEpisodeList();
};
renderVideo();
