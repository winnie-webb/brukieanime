import renderVideo from "./renderVideo.js";
const changeEpisode = () => {
  const episodes = document.querySelectorAll(".episodes__episode");
  episodes.forEach((episode) => {
    console.log(episode);
    episode.addEventListener("click", () => {
      console.log("Change");

      episodes.forEach((otherEpisode) => {
        otherEpisode.classList.remove("current-episode");
      });
      episode.classList.add("current-episode");
      renderVideo(parseInt(episode.textContent));
    });
  });
};
export default changeEpisode;
