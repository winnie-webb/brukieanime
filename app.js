if (process.env.NODE_ENV !== "production") require("dotenv").config();
const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Pages
app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/watch/:animeName", (req, res) => {
  res.render("pages/streaming");
});

const apiRouter = require("./routes/api");
app.use("/api", apiRouter);
app.listen(port, () => console.log(`Server started on ${port} `));
// 660px grid 3
// 500px grid 2
