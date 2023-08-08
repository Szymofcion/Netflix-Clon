import "./Movies.scss";
import { useState, useEffect } from "react";
import CardHover from "./CardHover";
const Movies = (props) => {
  const [orginal, setOrginal] = useState([]);
  const [rated, setRated] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [horror, setHorror] = useState([]);
  const [action, setAction] = useState([]);
  const [isHover, setIsHover] = useState(false);

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
      setOrginal(data.orginal);
      setRated(data.rated);
      setComedy(data.comedy);
      setHorror(data.horror);
      setAction(data.action);
    };

    generateMovies();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section>
      <h1 className="row__container-title">Orginalne seriale Netflix</h1>
      <div className="row__container">
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="row__container-list"
        >
          {orginal.map((items) => {
            return (
              <>
                <img
                  key={items.id}
                  alt="#"
                  className="row__container-img"
                  src={items.src}
                ></img>
                {isHover && <CardHover />}
              </>
            );
          })}
        </div>
      </div>
      <h1 className="row__container-title">Top 10 w Polsce</h1>
      <div className="row__container">
        {rated.map((items) => {
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
      <h1 className="row__container-title">Komedie</h1>
      <div className="row__container">
        {comedy.map((items) => {
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
      <h1 className="row__container-title">Horrory</h1>
      <div className="row__container">
        {horror.map((items) => {
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
      <h1 className="row__container-title">Akcje</h1>
      <div className="row__container">
        {action.map((items) => {
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
