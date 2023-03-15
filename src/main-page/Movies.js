import "./Movies.scss";
import { useState, useEffect } from "react";

const Movies = (props) => {
  const [movie, setMovie] = useState([]);

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
      setMovie(data.movies);
    };

    generateMovies();
    return () => {
      controller.abort();
    };
  }, []);
  console.log(movie);

  return (
    <section>
      <h1 className="row__container-title">{props.title}</h1>
      <div className="row__container">
        {movie.map((items) => {
          return (
            <img
              key={items.id}
              alt="#"
              className="row__container-img"
              src={items.src}
            ></img>
          );
        })}
      </div>
    </section>
  );
};
export default Movies;
