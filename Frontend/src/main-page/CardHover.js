import React, { useState } from "react";
import { BsFillPlayCircleFill, BsFillCollectionPlayFill } from "react-icons/bs";
import vide from "../assets/dominic-fike-3-nights.mp4";
import "./CardHover.scss";

const CardHover = () => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleShowVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="container__video">
      <div className="container__video-icons">
        <BsFillPlayCircleFill onClick={toggleShowVideo} />
        <BsFillCollectionPlayFill />
      </div>
      {showVideo && (
        <div className="video-overlay" onClick={toggleShowVideo}>
          <div className="video-wrapper">
            <iframe
              title="YouTube Video"
              width="560"
              height="315"
              src={vide}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardHover;
