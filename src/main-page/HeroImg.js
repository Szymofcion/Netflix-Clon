import { useState, useEffect, Fragment } from "react";
import "./HeroImg.scss";
import { v4 as uuidv4 } from "uuid";

const HeroImg = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState([]);
  const [img, setImg] = useState([]);
  const [descriptions, setDescriptions] = useState([]);

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

      setTitle(data.movies[0].title);
      setDescriptions(data.movies[0].descriptions);
      setImg(data.movies[0].src);
    };

    generateMovies();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <header className="container__img">
      <div className="container__img-content">
        <h1>{title}</h1>
        <img
          src={img}
          alt="okładka"
        ></img>
        <div className="container__img-buttons">
          <button>Play</button>
          <button>My list</button>
        </div>
        <div className="container__img-descriptions"></div>
        <span>{descriptions}</span>
      </div>
    </header>
  );
};

export default HeroImg;
