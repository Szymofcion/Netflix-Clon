const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const dir = path.join(__dirname, "movieCover");

app.use(cors());
app.use("/movieCover", express.static(dir));

app.get("/movies", function (req, res, next) {
  res.json({
    orginal: [
      {
        id: 1,
        title: "Ty",
        src: "http://localhost:3000/movieCover/Ty.jpg",
        descriptions:
          "Błyskotliwy menadżer księgarni Joe (Penn Badgley) poznaje młodą aspirującą pisarkę Beck (Elizabeth Lail). Posługując się mediami społecznościowymi, mężczyzna zdobywa wiedzę na temat dziewczyny, by móc się do niej zbliżyć. Z czasem jego niewinne zauroczenie przeradza się w obsesję.",
      },
      {
        id: 2,
        title: "Ty",
        src: "http://localhost:3000/movieCover/Ty.jpg",
        descriptions:
          "Błyskotliwy menadżer księgarni Joe (Penn Badgley) poznaje młodą aspirującą pisarkę Beck (Elizabeth Lail). Posługując się mediami społecznościowymi, mężczyzna zdobywa wiedzę na temat dziewczyny, by móc się do niej zbliżyć. Z czasem jego niewinne zauroczenie przeradza się w obsesję.",
      },
      {
        id: 3,
        title: "Ty",
        src: "http://localhost:3000/movieCover/Ty.jpg",
        descriptions:
          "Błyskotliwy menadżer księgarni Joe (Penn Badgley) poznaje młodą aspirującą pisarkę Beck (Elizabeth Lail). Posługując się mediami społecznościowymi, mężczyzna zdobywa wiedzę na temat dziewczyny, by móc się do niej zbliżyć. Z czasem jego niewinne zauroczenie przeradza się w obsesję.",
      },
      {
        id: 4,
        title: "Ty",
        src: "http://localhost:3000/movieCover/Ty.jpg",
        descriptions:
          "Błyskotliwy menadżer księgarni Joe (Penn Badgley) poznaje młodą aspirującą pisarkę Beck (Elizabeth Lail). Posługując się mediami społecznościowymi, mężczyzna zdobywa wiedzę na temat dziewczyny, by móc się do niej zbliżyć. Z czasem jego niewinne zauroczenie przeradza się w obsesję.",
      },
    ],
    rated: [
      {
        id: 1,
        title: "Zwerbowany",
        src: "http://localhost:3000/movieCover/Zwerbowany.jpg",
        descriptions:
          "Młody prawnik zostaje wciągnięty w niebezpieczną międzynarodową aferę szpiegowską, gdy dawna pracownica CIA grozi, że ujawni sekrety agencji.",
      },
      {
        id: 2,
        title: "Zwerbowany",
        src: "http://localhost:3000/movieCover/Zwerbowany.jpg",
        descriptions:
          "Młody prawnik zostaje wciągnięty w niebezpieczną międzynarodową aferę szpiegowską, gdy dawna pracownica CIA grozi, że ujawni sekrety agencji.",
      },
      {
        id: 3,
        title: "Zwerbowany",
        src: "http://localhost:3000/movieCover/Zwerbowany.jpg",
        descriptions:
          "Młody prawnik zostaje wciągnięty w niebezpieczną międzynarodową aferę szpiegowską, gdy dawna pracownica CIA grozi, że ujawni sekrety agencji.",
      },
      {
        id: 4,
        title: "Zwerbowany",
        src: "http://localhost:3000/movieCover/Zwerbowany.jpg",
        descriptions:
          "Młody prawnik zostaje wciągnięty w niebezpieczną międzynarodową aferę szpiegowską, gdy dawna pracownica CIA grozi, że ujawni sekrety agencji.",
      },
    ],
    comedy: [
      {
        id: 1,
        title: "Zwerbowany",
        src: "http://localhost:3000/movieCover/Zwerbowany.jpg",
        descriptions:
          "Młody prawnik zostaje wciągnięty w niebezpieczną międzynarodową aferę szpiegowską, gdy dawna pracownica CIA grozi, że ujawni sekrety agencji.",
      },
      {
        id: 2,
        title: "Zwerbowany",
        src: "http://localhost:3000/movieCover/Zwerbowany.jpg",
        descriptions:
          "Młody prawnik zostaje wciągnięty w niebezpieczną międzynarodową aferę szpiegowską, gdy dawna pracownica CIA grozi, że ujawni sekrety agencji.",
      },
      {
        id: 3,
        title: "Zwerbowany",
        src: "http://localhost:3000/movieCover/Zwerbowany.jpg",
        descriptions:
          "Młody prawnik zostaje wciągnięty w niebezpieczną międzynarodową aferę szpiegowską, gdy dawna pracownica CIA grozi, że ujawni sekrety agencji.",
      },
      {
        id: 4,
        title: "Zwerbowany",
        src: "http://localhost:3000/movieCover/Zwerbowany.jpg",
        descriptions:
          "Młody prawnik zostaje wciągnięty w niebezpieczną międzynarodową aferę szpiegowską, gdy dawna pracownica CIA grozi, że ujawni sekrety agencji.",
      },
    ],
    horror: [
      {
        id: 1,
        title: "1899",
        src: "http://localhost:3000/movieCover/1899.jpg",
        descriptions:
          "1899 rok. Parowiec z emigrantami bierze kurs na zachód. Pasażerowie pochodzą z różnych części Europy, ale łączą ich wspólne marzenia i nadzieja na lepszą przyszłość w nowym świecie.",
      },
      {
        id: 2,
        title: "1899",
        src: "http://localhost:3000/movieCover/1899.jpg",
        descriptions:
          "1899 rok. Parowiec z emigrantami bierze kurs na zachód. Pasażerowie pochodzą z różnych części Europy, ale łączą ich wspólne marzenia i nadzieja na lepszą przyszłość w nowym świecie.",
      },
      {
        id: 3,
        title: "1899",
        src: "http://localhost:3000/movieCover/1899.jpg",
        descriptions:
          "1899 rok. Parowiec z emigrantami bierze kurs na zachód. Pasażerowie pochodzą z różnych części Europy, ale łączą ich wspólne marzenia i nadzieja na lepszą przyszłość w nowym świecie.",
      },
      {
        id: 4,
        title: "1899",
        src: "http://localhost:3000/movieCover/1899.jpg",
        descriptions:
          "1899 rok. Parowiec z emigrantami bierze kurs na zachód. Pasażerowie pochodzą z różnych części Europy, ale łączą ich wspólne marzenia i nadzieja na lepszą przyszłość w nowym świecie.",
      },
    ],
    action: [
      {
        id: 1,
        title: "Peakty Blinders",
        src: "http://localhost:3000/movieCover/PeakyBlinders.jpg",
        descriptions:
          "Tommy Shelby (Cillian Murphy) jest weteranem wojennym i przywódcą niesławnego gangu Peaky Blinders, zwanego tak z powodu żyletek wszytych do czapek noszonych przez jego członków.",
      },
      {
        id: 2,
        title: "Peakty Blinders",
        src: "http://localhost:3000/movieCover/PeakyBlinders.jpg",
        descriptions:
          "Tommy Shelby (Cillian Murphy) jest weteranem wojennym i przywódcą niesławnego gangu Peaky Blinders, zwanego tak z powodu żyletek wszytych do czapek noszonych przez jego członków.",
      },
      {
        id: 3,
        title: "Peakty Blinders",
        src: "http://localhost:3000/movieCover/PeakyBlinders.jpg",
        descriptions:
          "Tommy Shelby (Cillian Murphy) jest weteranem wojennym i przywódcą niesławnego gangu Peaky Blinders, zwanego tak z powodu żyletek wszytych do czapek noszonych przez jego członków.",
      },
      {
        id: 4,
        title: "Peakty Blinders",
        src: "http://localhost:3000/movieCover/PeakyBlinders.jpg",
        descriptions:
          "Tommy Shelby (Cillian Murphy) jest weteranem wojennym i przywódcą niesławnego gangu Peaky Blinders, zwanego tak z powodu żyletek wszytych do czapek noszonych przez jego członków.",
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
