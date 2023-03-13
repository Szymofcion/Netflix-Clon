var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

app.get("/title", function (req, res, next) {
  res.json({
    title: ["Mission imposible", "Ty"],
    img: ["img2", "img1"],
    descriptions: ["opis filmu pierwszego", "opis do filmu który będzie drugi"],
  });
});
app.get("/img", function (req, res, next) {
  res.json({ img: ["img2", "img1"] });
});

app.listen(3000, function () {
  console.log("CORS-enabled web server listening on port 3000");
});
