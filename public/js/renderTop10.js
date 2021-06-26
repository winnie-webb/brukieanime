async function renderTop10() {
  const top10Wrapper = document.querySelector(".top10");

  try {
    const top10Request = await fetch(
      "https://ajax.gogo-load.com/anclytic-ajax.html?id=1&link_web=https://www1.gogoanime.ai/"
    );
    const top10Response = await top10Request.text();
    top10Wrapper.insertAdjacentHTML("beforeend", top10Response);
  } catch (err) {
    top10Wrapper.textContent = `Error : ${err.message}`;
  }
}
export default renderTop10;
