import { useState } from "react";

import { Link } from "react-router-dom";
import { BsX } from "react-icons/bs";

import "./Avatar.scss";

const Avatar = ({ showDeleteButton, src }) => {
  const [removed, setRemoved] = useState(false);


  const removeProfile = () => {
    setRemoved(true);
  };
  if (removed) {
    return null;
  }

  if (showDeleteButton) {
    return (
      <div onClick={removeProfile} className="container__avatar">
        <button className="remove-profile">
          <BsX />
        </button>
        <img className="container__avatar-img" src={src} alt="" />
      </div>
    );
  }

  return (
    <Link to="/main">
      <div className="container__avatar">
        <img className="container__avatar-img" src={src} alt="" />
      </div>
    </Link>
  );
};


export default Avatar;
