import {useState, useEffect} from 'react'
import { apiKey } from '../component/api/apiKey'
import './HeroImg.scss'

const HeroImg = ()=>{
    const [hero, setHero] =useState([])

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
          console.log(respons);
          
        //   Math.floor(Math.random() * images
          setHero([...images]);
        };
        generateMovies();
      }, []);
    return(
        <header className='container__img'>
{/* {title} */}
{/* {div>2buttons} */}
{/* {descriptions} */}
        </header>
    )
}

export default HeroImg