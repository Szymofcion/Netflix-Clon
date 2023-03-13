import "./Movies.scss";
import { useState, useEffect } from "react";
import { apiKey } from "../component/api/apiKey";

const Movies = (props) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const headers = {
      Autorization: apiKey,
    };
    const generateMovies = async () => {
      const respons = await fetch(
        "https://imdb-api.com/en/API/Top250Movies/k_nc812076",
        { headers }
      );
      const responseJSON = await respons.json();
      const images = responseJSON.items;
      setMovie([...images]);
    };
    generateMovies();
  }, []);

  

  return (
    <section>
      <h1 className="row__container-title">{props.title}</h1>
      <div className="row__container">
        {movie.slice(0,10).map((items) => {
          return (
            <img
              key={items.id}
              alt="#"
              className="row__container-img"
              src={items.image}
            ></img>
          );
        })}
      </div>
    </section>
  );
};
export default Movies;
