var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

app.get("/movies", function (req, res, next) {
  res.json({
    movies: [
      {
        title: "Mission Imposible I",
        src: "jakis link",
        descritpions: "Opis wyżej wymienionego filmu",
      },
      {
        title: "Mission Imposible II",
        src: "jakis link",
        descritpions: "Opis wyżej wymienionego filmu",
      },
      {
        title: "Mission Imposible III",
        src: "jakis link",
        descritpions: "Opis wyżej wymienionego filmu",
      },
      {
        title: "Mission Imposible IV",
        src: "jakis link",
        descritpions: "Opis wyżej wymienionego filmu",
      },
    ],
  });
});
app.get("/img", function (req, res, next) {
  res.json({ img: ["img2", "img1"] });
});

app.listen(3000, function () {
  console.log("CORS-enabled web server listening on port 3000");
});
