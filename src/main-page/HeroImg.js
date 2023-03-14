import { useState, useEffect } from "react";
import "./HeroImg.scss";

const HeroImg = () => {
  const [title, setTitle] = useState([]);
  const [img, setImg] = useState([]);
  const [descriptions, setDescriptions] = useState([]);

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
      console.log(data.movies[1]);

      
      // const img = responseJSON.movies.src;
      // const descriptions = responseJSON.movies.descriptions;

      setTitle([...title]);
      setImg([...img]);
      setDescriptions([...descriptions]);
    };
   
    
    generateMovies();
    return () => {
      controller.abort();
    };
  }, [title,img,descriptions]);
 

  return (
    <header className="container__img">
      <div className="container__img-content">
        {/* <h1>{title[1]}</h1> */}
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
