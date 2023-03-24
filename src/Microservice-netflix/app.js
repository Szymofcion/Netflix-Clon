require("dotenv").config();

const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const dir = path.join(__dirname, "movieCover");
// const dotenv = dotenv.config()

const jwt = require("jsonwebtoken");
// const User = require("./userModel");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/movieCover", express.static(dir));

app.get("/api/users", (req, res) => {
  const users = [{ id: 1, name: "Daria" }];

  res.send(users);
});

app.post("/api/auth/login", authenticate, (req, res) => {
  // const login = req.body.email;
  // const password = req.body.password;

  const accessToken = jwt.sign({ id: 1 }, process.env.TOKEN_SECRET, {
    expiresIn: 86400,
  });
  const refreshToken = jwt.sign({ id: 1 }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: 525600,
  });

  res.send({ accessToken, refreshToken });
});

function authenticate(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
}

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
        title: "EnolaHolmes2",
        src: "http://localhost:3000/movieCover/EnolaHolmes2.jpg",
        descriptions:
          "Enola przyjmuje pierwszą oficjalną sprawę jako detektyw, jednak aby rozwiązać tajemnicę zaginięcia dziewczyny, będzie potrzebować pomocy przyjaciół i brata Sherlocka.",
      },
      {
        id: 3,
        title: "Fauda",
        src: "http://localhost:3000/movieCover/Faud.jpg",
        descriptions:
          "Akcja serialu toczy się we współczesnym Izraelu i w Palestynie na tle konfliktu izraelsko-palestyńskiego. W trakcie przesłuchania palestyńskiego członka Hamasu kapitan izraelskich służb specjalnych odkrywa, że Abu Ahmed, zwany też Panterą, terrorysta uznany za zabitego, żyje i szykuje zamac.",
      },
      {
        id: 4,
        title: "GoodGirls`",
        src: "http://localhost:3000/movieCover/GoodGirlL_.jpg",
        descriptions:
          "Mieszkające na przedmieściach Detroit Beth (Christina Hendricks), Annie (Mae Whitman) i Ruby (Retta) ledwo wiążą koniec z końcem. Chcąc poprawić swoją sytuację finansową, organizują napad na sklep spożywczy, w którym Annie jest kasjerką.",
      },
      {
        id: 5,
        title: "JakSprzedawacDragiWSieci`",
        src: "http://localhost:3000/movieCover/JakSprzedawacDragiWSieci.jpg",
        descriptions:
          "Aby odzyskać dziewczynę, nastoletni nerd zaczyna sprzedawać online ecstasy ze swojej sypialni i zostaje jednym z największych dilerów w Europie.",
      },
      {
        id: 6,
        title: "Luther`",
        src: "http://localhost:3000/movieCover/Luther.jpg",
        descriptions:
          "rawurowo skonstruowany psychologiczny serial kryminalny opowiadający o piekielnie inteligentnym i stroniącym od ludzi Johnie Lutherze, który jest detektywem w londyńskiej jednostce policyjnej. ",
      },
      {
        id: 7,
        title: "Narcos`",
        src: "http://localhost:3000/movieCover/Narcos.jpg",
        descriptions:
          "Pochodzący z Kolumbii Pablo Escobar (Wagner Moura) jest baronem narkotykowym. Oddany rodzinie mężczyzna szybko zbija fortunę na handlu kokainą.",
      },
      {
        id: 8,
        title: "Norsemen`",
        src: "http://localhost:3000/movieCover/Norsemen.jpg",
        descriptions:
          "Norsemen to norweski serial, który opowiada o perypetiach mieszkańców wikińskiej osady Norheim. Powstał na fali popularności tematyką kultury i historii wikingów.",
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
        title: "Luther`",
        src: "http://localhost:3000/movieCover/Luther.jpg",
        descriptions:
          "rawurowo skonstruowany psychologiczny serial kryminalny opowiadający o piekielnie inteligentnym i stroniącym od ludzi Johnie Lutherze, który jest detektywem w londyńskiej jednostce policyjnej. ",
      },
      {
        id: 3,
        title: "JakSprzedawacDragiWSieci`",
        src: "http://localhost:3000/movieCover/JakSprzedawacDragiWSieci.jpg",
        descriptions:
          "Aby odzyskać dziewczynę, nastoletni nerd zaczyna sprzedawać online ecstasy ze swojej sypialni i zostaje jednym z największych dilerów w Europie.",
      },
      {
        id: 4,
        title: "Obserwator",
        src: "http://localhost:3000/movieCover/Obserwator.jpg",
        descriptions:
          "Dean i Nora Brannockowie (w serialu Bobby Cannavale i Naomi Watts) przeprowadzają się do idyllicznej dzielnicy New Jersey, gdzie szukają spokoju i bezpiecznego miejsca dla swoich dzieci.",
      },
      {
        id: 5,
        title: "Peakty Blinders",
        src: "http://localhost:3000/movieCover/PeakyBlinders.jpg",
        descriptions:
          "Tommy Shelby (Cillian Murphy) jest weteranem wojennym i przywódcą niesławnego gangu Peaky Blinders, zwanego tak z powodu żyletek wszytych do czapek noszonych przez jego członków.",
      },
      {
        id: 6,
        title: "SandMan",
        src: "http://localhost:3000/movieCover/SandMan.jpg",
        descriptions:
          "Dean i Nora Brannockowie (w serialu Bobby Cannavale i Naomi Watts) przeprowadzają się do idyllicznej dzielnicy New Jersey, gdzie szukają spokoju i bezpiecznego miejsca dla swoich dzieci.",
      },
      {
        id: 7,
        title: "StrangerThings",
        src: "http://localhost:3000/movieCover/StrangerThings.jpg",
        descriptions:
          "W nocy 6 listopada 1983, w Hawkins w stanie Indiana, w tajemniczych okolicznościach znika dwunastoletni Will Byers. Jego matka, Joyce, chce za wszelką cenę odnaleźć syna, część mieszkańców uważa jednak, że oszalała. ",
      },
      {
        id: 8,
        title: "TheRain",
        src: "http://localhost:3000/movieCover/TheRain.jpg",
        descriptions:
          "Sześć lat po tym, jak roznoszony przez deszcz wirus spustoszył Skandynawię, brat i siostra dołączają do grupy młodych ocalałych, poszukując bezpieczeństwa — i odpowiedzi.",
      },
    ],
    comedy: [
      {
        id: 1,
        title: "GoodGirls`",
        src: "http://localhost:3000/movieCover/GoodGirlL_.jpg",
        descriptions:
          "Mieszkające na przedmieściach Detroit Beth (Christina Hendricks), Annie (Mae Whitman) i Ruby (Retta) ledwo wiążą koniec z końcem. Chcąc poprawić swoją sytuację finansową, organizują napad na sklep spożywczy, w którym Annie jest kasjerką.",
      },
      {
        id: 2,
        title: "SamceAlfa",
        src: "http://localhost:3000/movieCover/SamceAlfa.jpg",
        descriptions:
          "Piotrek za namową narzeczonej, zapisuje się na kurs rzucania palenia. Przez pomyłkę trafia na enigmatyczne szkolenie samorozwoju, gdzie pod wpływem charyzmatycznego coacha – Lidera, zaczyna poddawać w wątpliwość swój związek, który do tej pory uważał za idealny.",
      },
      {
        id: 3,
        title: "NieMaJakWRodzinie",
        src: "http://localhost:3000/movieCover/NieMaJakWRodzinie.jpg",
        descriptions:
          "Młody prawnik zostaje wciągnięty w niebezpieczną międzynarodową aferę szpiegowską, gdy dawna pracownica CIA grozi, że ujawni sekrety agencji.",
      },
      {
        id: 4,
        title: "DobreMiejsce",
        src: "http://localhost:3000/movieCover/DobreMiejsce.jpg",
        descriptions:
          "Młody prawnik zostaje wciągnięty w niebezpieczną międzynarodową aferę szpiegowską, gdy dawna pracownica CIA grozi, że ujawni sekrety agencji.",
      },
      {
        id: 5,
        title: "SexEducation",
        src: "http://localhost:3000/movieCover/SexEducation.jpg",
        descriptions:
          "Młody prawnik zostaje wciągnięty w niebezpieczną międzynarodową aferę szpiegowską, gdy dawna pracownica CIA grozi, że ujawni sekrety agencji.",
      },
      {
        id: 6,
        title: "Atypowy",
        src: "http://localhost:3000/movieCover/Atypowy.jpg",
        descriptions:
          "Młody prawnik zostaje wciągnięty w niebezpieczną międzynarodową aferę szpiegowską, gdy dawna pracownica CIA grozi, że ujawni sekrety agencji.",
      },
      {
        id: 7,
        title: "GinnyAndGorgia",
        src: "http://localhost:3000/movieCover/GinnyAndGorgia.jpg",
        descriptions:
          "Młody prawnik zostaje wciągnięty w niebezpieczną międzynarodową aferę szpiegowską, gdy dawna pracownica CIA grozi, że ujawni sekrety agencji.",
      },
      {
        id: 8,
        title: "ParadisePD",
        src: "http://localhost:3000/movieCover/ParadisePD.jpg",
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
        title: "MamyTuDucha",
        src: "http://localhost:3000/movieCover/MamyTuDucha.jpg",
        descriptions:
          "1899 rok. Parowiec z emigrantami bierze kurs na zachód. Pasażerowie pochodzą z różnych części Europy, ale łączą ich wspólne marzenia i nadzieja na lepszą przyszłość w nowym świecie.",
      },
      {
        id: 3,
        title: "Opiekunka",
        src: "http://localhost:3000/movieCover/Opiekunka.jpg",
        descriptions:
          "1899 rok. Parowiec z emigrantami bierze kurs na zachód. Pasażerowie pochodzą z różnych części Europy, ale łączą ich wspólne marzenia i nadzieja na lepszą przyszłość w nowym świecie.",
      },
      {
        id: 4,
        title: "Rytual",
        src: "http://localhost:3000/movieCover/Rytual.jpg",
        descriptions:
          "1899 rok. Parowiec z emigrantami bierze kurs na zachód. Pasażerowie pochodzą z różnych części Europy, ale łączą ich wspólne marzenia i nadzieja na lepszą przyszłość w nowym świecie.",
      },
      {
        id: 5,
        title: "Cisza",
        src: "http://localhost:3000/movieCover/Cisza.jpg",
        descriptions:
          "1899 rok. Parowiec z emigrantami bierze kurs na zachód. Pasażerowie pochodzą z różnych części Europy, ale łączą ich wspólne marzenia i nadzieja na lepszą przyszłość w nowym świecie.",
      },
      {
        id: 6,
        title: "CoWidacISlychac",
        src: "http://localhost:3000/movieCover/CoWidacISlychac.jpg",
        descriptions:
          "1899 rok. Parowiec z emigrantami bierze kurs na zachód. Pasażerowie pochodzą z różnych części Europy, ale łączą ich wspólne marzenia i nadzieja na lepszą przyszłość w nowym świecie.",
      },
      {
        id: 7,
        title: "Ladunek",
        src: "http://localhost:3000/movieCover/Ladunek.jpg",
        descriptions:
          "1899 rok. Parowiec z emigrantami bierze kurs na zachód. Pasażerowie pochodzą z różnych części Europy, ale łączą ich wspólne marzenia i nadzieja na lepszą przyszłość w nowym świecie.",
      },
      {
        id: 8,
        title: "Clinical",
        src: "http://localhost:3000/movieCover/Clinical.jpg",
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
        title: "Wiedzmin",
        src: "http://localhost:3000/movieCover/Wiedzmin.jpg",
        descriptions:
          "Wiedźmin to epicka opowieść na podstawie kultowej sagi fantasy Andrzeja Sapkowskiego. Geralt z Rivii, samotny zabójca potworów, usiłuje odnaleźć się w świecie, w którym ludzie bywają gorsi niż bestie, na które poluje.",
      },
      {
        id: 3,
        title: "GinnyAndGorgia",
        src: "http://localhost:3000/movieCover/GinnyAndGorgia.jpg",
        descriptions:
          "Młody prawnik zostaje wciągnięty w niebezpieczną międzynarodową aferę szpiegowską, gdy dawna pracownica CIA grozi, że ujawni sekrety agencji.",
      },
      {
        id: 4,
        title: "SamceAlfa",
        src: "http://localhost:3000/movieCover/SamceAlfa.jpg",
        descriptions:
          "Piotrek za namową narzeczonej, zapisuje się na kurs rzucania palenia. Przez pomyłkę trafia na enigmatyczne szkolenie samorozwoju, gdzie pod wpływem charyzmatycznego coacha – Lidera, zaczyna poddawać w wątpliwość swój związek, który do tej pory uważał za idealny.",
      },
      {
        id: 5,
        title: "SandMan",
        src: "http://localhost:3000/movieCover/SandMan.jpg",
        descriptions:
          "Dean i Nora Brannockowie (w serialu Bobby Cannavale i Naomi Watts) przeprowadzają się do idyllicznej dzielnicy New Jersey, gdzie szukają spokoju i bezpiecznego miejsca dla swoich dzieci.",
      },
      {
        id: 6,
        title: "StrangerThings",
        src: "http://localhost:3000/movieCover/StrangerThings.jpg",
        descriptions:
          "W nocy 6 listopada 1983, w Hawkins w stanie Indiana, w tajemniczych okolicznościach znika dwunastoletni Will Byers. Jego matka, Joyce, chce za wszelką cenę odnaleźć syna, część mieszkańców uważa jednak, że oszalała. ",
      },
      {
        id: 7,
        title: "EnolaHolmes2",
        src: "http://localhost:3000/movieCover/EnolaHolmes2.jpg",
        descriptions:
          "Enola przyjmuje pierwszą oficjalną sprawę jako detektyw, jednak aby rozwiązać tajemnicę zaginięcia dziewczyny, będzie potrzebować pomocy przyjaciół i brata Sherlocka.",
      },
      {
        id: 8,
        title: "Zwerbowany",
        src: "http://localhost:3000/movieCover/Zwerbowany.jpg",
        descriptions:
          "Młody prawnik zostaje wciągnięty w niebezpieczną międzynarodową aferę szpiegowską, gdy dawna pracownica CIA grozi, że ujawni sekrety agencji.",
      },
    ],
  });
});
app.get("/img", function (req, res, next) {
  res.json({ img: ["img2", "img1"] });
});

app.listen(3000, function () {
  console.log("Server start on port 3000");
});
