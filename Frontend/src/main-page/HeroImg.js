import { useState, useEffect } from "react";
import "./HeroImg.scss";
const HeroImg = () => {
  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const generateMovies = async () => {
      const response = await fetch("http://localhost:3000/movies", {
        signal,
      });

      if (!response.ok) {
        return;
      }
      const data = await response.json();
      setMovies(data.orginal);
    };

    generateMovies();
    return () => {
      controller.abort();
    };
  }, []);
  useEffect(() => {
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      const randomMovie = movies[randomIndex];
      setRandomMovie(randomMovie);
    }
  }, [movies]);

  return (
    <header
      className="container__img"
      style={{
        backgroundImage: `url(${randomMovie ? randomMovie.src : ""})`,
      }}
    >
      <div className="container__img-content">
        <h1>{randomMovie.title}</h1>
        <div className="container__img-buttons">
          <button className="buttons-hero">Play</button>
          <button className="buttons-hero">My list</button>
        </div>
        <div className="container__img-descriptions">
          <span>{randomMovie.descriptions}</span>
        </div>
      </div>
      <div className="shadow-bottom"></div>
    </header>
  );
};

export default HeroImg;
