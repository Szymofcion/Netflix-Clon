const path = require('path')
const express = require("express");
const cors = require("cors");
const app = express();
const dir = path.join(__dirname, "movieCover");

app.use(cors());
app.use('/movieCover', express.static(dir))



app.get("/movies", function (req, res, next) {
  res.json({
    movies: [
      {
        id: 1,
        title: "Mission Imposible I",
        src: "http://localhost:3000/movieCover/Zwerbowany.jpg",
        descriptions: "Opis wyżej wymienionego filmu",
      },
      {
        id: 2,
        title: "Mission Imposible II",
        src: "jakis link",
        descriptions: "Opis wyżej wymienionego filmu",
      },
      {
        id: 3,
        title: "Mission Imposible III",
        src: "jakis link",
        descriptions: "Opis wyżej wymienionego filmu",
      },
      {
        id: 4,
        title: "Mission Imposible IV",
        src: "jakis link",
        descriptions: "Opis wyżej wymienionego filmu",
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
