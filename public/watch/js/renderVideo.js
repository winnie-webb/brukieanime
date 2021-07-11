let episode = 1;

const renderStream = async () => {
  const animeName = window.location.href.split("watch/").pop();
  console.time("stream");

  // 2s
  const streamRequest = await fetch(
    `/api/v1/watch/${animeName}-episode-${episode}`
  );
  const streamResponse = await streamRequest.json();
  console.timeEnd("stream");

  const renderVideo = () => {
    const videoIframe = document.getElementById("video-player");
    const iframeSrc = streamResponse.videoStreamURL;
    videoIframe.src = iframeSrc;
  };

  const renderEpisodeList = () => {
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
    console.log(episodeEnd);
    const episodesInTab = Array.from(
      Array(parseInt(episodeEnd[currentTab])).keys()
    );
    console.log(episodesInTab);
    episodesInTab.forEach((ep) => {
      if (ep === 0) return;
      const episodeList = document.createElement("li");
      episodeList.classList.add("episodes__episode");
      episodeList.textContent = ep;
      episodesWrapper.append(episodeList);
    });
  };
  renderEpisodeList();
  renderVideo();
};
renderStream();
