import { BsFillPlayCircleFill, BsFillCollectionPlayFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "./CardHover.scss";

const CardHover = () => {
  const navigate = useNavigate();

  return (
    <div className="container__video">
      <div className="container__video-icons">
        <BsFillPlayCircleFill onClick={() => navigate("/player")} />{" "}
        <BsFillCollectionPlayFill />
      </div>
      <div className="container__video-bottom">
        <iframe
          autoPlay
          loop
          muted
          src="https://www.youtube.com/watch?v=J50rarfx1pY&ab_channel=CM3OFFICIAL"
        ></iframe>
      </div>
    </div>
  );
};
export default CardHover;
