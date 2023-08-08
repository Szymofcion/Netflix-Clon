import { BsFillPlayCircleFill, BsFillCollectionPlayFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "./CardHover.scss";

const CardHover = () => {
  const navigate = useNavigate();

 
  return (
    <div className="container__video-bottom">
      <BsFillPlayCircleFill onClick={() => navigate("/player")} />{" "}
      <BsFillCollectionPlayFill />
      <iframe 
        autoPlay
        loop
        muted
        src="https://www.youtube.com/watch?v=mWKDZRJWdF4&list=RDe-xToC9wNl0&index=7&ab_channel=UnlikePluto"
      ></iframe>
    
    </div>
  );
};
export default CardHover;
