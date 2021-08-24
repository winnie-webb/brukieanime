if (process.env.NODE_ENV !== "production") require("dotenv").config();

const express = require("express");
const router = express.Router();
const getRecentReleases = require("../model/anime-data");
const getWatchStream = require("../model/streaming");
const { DB_URI, DB_URI2 } = process.env;

router.get("/v1/updated", async (req, res) => {
  try {
    let pageQuery = req.query.page;
    if (!pageQuery) pageQuery = 1;
    const recentReleases = await getRecentReleases(
      `${DB_URI}/updated?page=${pageQuery}`
    );

    res.send({ data: recentReleases });
  } catch (err) {
    console.log(err.message);
  }
});
router.get("/v1/newest", async (req, res) => {
  try {
    let pageQuery = req.query.page;
    if (!pageQuery) pageQuery = 1;

    const newest = await getRecentReleases(
      `${DB_URI}/newest?page=${pageQuery}`
    );

    res.send({ data: newest });
  } catch (err) {
    console.error(err.message);
  }
});
router.get("/v1/ongoing", async (req, res) => {
  try {
    let pageQuery = req.query.page;
    if (!pageQuery) pageQuery = 1;

    const newest = await getRecentReleases(`${DB_URI}/ongoing`, pageQuery);

    res.send({ data: newest });
  } catch (err) {
    console.error(err.message);
  }
});
router.get("/v1/watch/:animeNameAndEpisode", async (req, res) => {
  try {
    const animeNameAndEpisode = req.params.animeNameAndEpisode;
    const url = `${DB_URI2}${animeNameAndEpisode}`;
    const stream = await getWatchStream(url);
    res.send(stream);
  } catch (err) {
    res.send(err);
  }
});
router.get("/v1/search", async (req, res) => {
  const keyword = req.query.keyword;
  const url = `${DB_URI}/search?keyword=${keyword}`;
  const searchAnimeData = await getRecentReleases(url);
  res.json({ data: searchAnimeData });
});
module.exports = router;
