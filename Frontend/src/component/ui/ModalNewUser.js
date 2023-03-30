import { useState } from "react";

import { BsArrowLeftShort } from "react-icons/bs";
import avatar1 from "../img/avatar1.png";
import avatar2 from "../img/avatar2.png";
import avatar3 from "../img/avatar3.png";
import avatar4 from "../img/avatar4.png";
import "./ModalNewUser.scss";

const ModalNewUser = ({ closeModal }) => {
  const [enteredImage, setEnteredImage] = useState("");

  const avatarImg = [
    {
      id: 1,
      img: avatar1,
    },
    {
      id: 2,
      img: avatar2,
    },
    {
      id: 3,
      img: avatar3,
    },
    {
      id: 4,
      img: avatar4,
    },
  ];
  
  const saveImage = (e) => {
    console.log(e.target);
    setEnteredImage(e.target);
  };

  const closeModalBtn = () => {
    closeModal(false);
  };

  return (
    <div
      className="container__modal"
      onClick={() => {
        closeModalBtn();
      }}
    >
      <div className="container__modal-newUser">
        <button onClick={closeModalBtn} className="container__modal-arrow">
          <BsArrowLeftShort />
        </button>
        <div className="container__modal-newImg">
          <h2> Wybierz avatar </h2>
          <div className="container__modal-avatar">
            {avatarImg.map((item) => (
              <div>
                <button onClick={saveImage}>
                  <img
                    key={item.id}
                    className="container__modal-img"
                    src={item.img}
                    alt="avatar"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNewUser;
