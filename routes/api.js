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
    console.time("time");
    const recentReleases = await getRecentReleases(
      `${DB_URI}/updated`,
      pageQuery
    );

    res.send({ data: recentReleases });
    console.timeEnd("time");
  } catch (err) {
    console.log(err.message);
  }
});
router.get("/v1/newest", async (req, res) => {
  try {
    let pageQuery = req.query.page;
    if (!pageQuery) pageQuery = 1;

    const newest = await getRecentReleases(`${DB_URI}/newest`, pageQuery);

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
    const watchStream = await getWatchStream(url);
    console.log(watchStream);
    res.send({ watchStream });
  } catch (err) {
    console.error(err);
  }
});
module.exports = router;
