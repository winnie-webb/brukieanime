import renderVideo from "./renderVideo.js";
const changeEpisode = () => {
  const animeName = window.location.href.split("watch/").pop();
  const episodes = document.querySelectorAll(".episodes__episode");
  episodes.forEach((episode) => {
    episode.addEventListener("click", () => {
      const currentEpisode = document.querySelector(".current-episode");
      if (currentEpisode) currentEpisode.classList.remove("current-episode");

      episode.classList.add("current-episode");
      renderVideo(parseInt(episode.textContent));
      localStorage.setItem(animeName, episode.textContent);
    });
  });
};
export default changeEpisode;
