import "./Movies.scss";
import { useState, useEffect } from "react";
import { apiKey } from "../component/api/apiKey";

const Movies = () => {
  const [movie, setMovie] = useState([]);

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
      const images = responseJSON.items;
      console.log(images);
      setMovie([...images]);
    };
    generateMovies();
  }, []);

  return (
    <div>
      {movie.map((items) => {
        return (
          <div>
            {items.title}
            <img alt="#" className="movies__container" src={items.image}></img>
          </div>
        );
      })}
    </div>
  );
};
export default Movies;
