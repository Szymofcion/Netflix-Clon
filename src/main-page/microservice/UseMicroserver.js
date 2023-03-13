import { useState, useEffect } from "react";

const Microsevice = () => {
  const [micro, setMicro] = useState([]);

  useEffect(() => {
    const generateMovies = async () => {
      const respons = await fetch("http://localhost:3000/title");
      console.log(respons);
      const responseJSON = await respons.json();
      console.log(responseJSON);
      
      const micro = responseJSON.title
      console.log(micro);
      

    };
    generateMovies();
  }, []);

  
  return (
    <div>
      <h1>Hej</h1>
    </div>
  );
};

export default Microsevice;
