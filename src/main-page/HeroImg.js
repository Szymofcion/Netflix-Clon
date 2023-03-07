import { useState, useEffect } from "react";
import { apiKey } from "../component/api/apiKey";
import "./HeroImg.scss";

const HeroImg = () => {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    const headers = {
      Autorization: apiKey,
    };
    const generateMovies = async () => {
      const respons = await fetch(
        "https://imdb-api.com/en/API/Images/k_nc812076/tt1375666/Short",
        { headers }
      );
      const responseJSON = await respons.json();

      setHero(
        responseJSON.items[
          Math.floor(Math.random() * responseJSON.items.length - 1)
        ]
      );
    };
    generateMovies();
  }, []);
  return (
    <header className="container__img">
      <div className="container__img-content">
        <h1>{hero.title}</h1>
        <div className="container__img-buttons">
          <button>Play</button>
          <button>My list</button>
        </div>
        <div className="container__img-descriptions"></div>
        <span>
          Czasy, gdy technologia pozwala na wchodzenie w świat snów. Złodziej
          Cobb ma za zadanie wszczepić myśl do śpiącego umysłu.
          Czasy, gdy technologia pozwala na wchodzenie w świat snów. Złodziej
          Cobb ma za zadanie wszczepić myśl do śpiącego umysłu.
          Czasy, gdy technologia pozwala na wchodzenie w świat snów. Złodziej
          Cobb ma za zadanie wszczepić myśl do śpiącego umysłu.
        </span>
        {/* {descriptions} */}
      </div>
    </header>
  );
};

export default HeroImg;
