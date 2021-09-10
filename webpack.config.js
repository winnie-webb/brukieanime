const path = require("path");

module.exports = [
  {
    mode: "development",

    entry: "./public/js/main.js",
    output: {
      path: path.resolve(__dirname, "public", "js", "dist"),
      filename: "main.js",
    },
  },
  {
    entry: "./public/watch/js/streaming.js",
    output: {
      path: path.resolve(__dirname, "public", "watch", "js", "dist"),
      filename: "main.js",
    },
  },
];
