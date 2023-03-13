import { useState, useEffect } from "react";

const Microsevice = () => {
  const [micro, setMicro] = useState([]);

  useEffect(() => {
 
    const generateMovies = async () => {
      const respons = await fetch(
        "http://localhost:3000/",
      );
      console.log(respons);
      

   
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
