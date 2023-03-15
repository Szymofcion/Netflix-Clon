import { useState, useEffect } from "react";
import "./HeroImg.scss";
import { v4 as uuidv4 } from "uuid";

const HeroImg = () => {
  const [movies, setMovies] = useState([]);

  uuidv4();

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

      // const img = responseJSON.movies.src;
      // const descriptions = responseJSON.movies.descriptions;
      // if (!data?.movies) {
      //   return;
      // }
      setMovies(data.movies[2]);
    };

    generateMovies();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <header className="container__img">
      <img src={movies.src} className="hero-img" alt="okładka"></img>
      <div className="container__img-content">
        <h1>{movies.title}</h1>
        <div className="container__img-buttons">
          <button className="buttons-hero">Play</button>
          <button className="buttons-hero">My list</button>
        </div>
        <div className="container__img-descriptions">
          <span>{movies.descriptions}</span>
        </div>
      </div>
    </header>
  );
};

export default HeroImg;
