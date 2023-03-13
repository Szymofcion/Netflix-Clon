import { useState, useEffect } from "react";
import "./HeroImg.scss";

const HeroImg = () => {
  const [title, setTitle] = useState([]);
  const [img, setImg] = useState([]);
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    const generateMovies = async () => {
      const respons = await fetch("http://localhost:3000/title");
      const responseJSON = await respons.json();
      const title = responseJSON.title;
      const img = responseJSON.img;
      const descriptions = responseJSON.descriptions;

      setTitle([...title]);
      setImg([...img]);
      setDescriptions([...descriptions]);
    };
    generateMovies();
  }, []);
  console.log(title);
  console.log(img);
  console.log(descriptions);

  return (
    <header className="container__img">
      <div className="container__img-content">
        <h1>{title[1]}</h1>
        <div className="container__img-buttons">
          <button>Play</button>
          <button>My list</button>
        </div>
        <div className="container__img-descriptions"></div>
        <span>{descriptions[0]}</span>
      </div>
    </header>
  );
};

export default HeroImg;
