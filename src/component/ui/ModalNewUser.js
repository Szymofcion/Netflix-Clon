import { useState} from "react";

import { BsArrowLeftShort } from "react-icons/bs";
import avatar1 from "../img/avatar1.png";
import avatar2 from "../img/avatar2.png";
import avatar3 from "../img/avatar3.png";
import avatar4 from "../img/avatar4.png";
import "./ModalNewUser.scss";

const ModalNewUser = ({ closeModal, }) => {
  const [enteredImage, setEnteredImage] = useState();
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
    }]


  const uploadAvatar = () => {
    setEnteredImage(avatarImg.map())
    console.log(setEnteredImage);

  }

  console.log(enteredImage);


  const closeModalBtn = () => {
    closeModal((prev => !prev))
  }


  return (
    <form className="container__modal" >

      <div className="container__modal-newUser">
        <button onClick={closeModalBtn} className="container__modal-arrow">
          <BsArrowLeftShort />
        </button>
        <div className="container__modal-newImg">
          <h2> Wybierz avatar </h2>
          <div className="container__modal-avatar">
            <button onClick={''} >
              <img id="1" className="container__modal-img" src={enteredImage} alt="" />
            </button>
          </div>
          <div className="container__modal-avatar">
            <button>
              <img id="2" className="container__modal-img" src={avatar2} alt="" />
            </button>
          </div>
          <div className="container__modal-avatar">
            <button>
              <img id="3" className="container__modal-img" src={avatar3} alt="" />
            </button>
          </div>
          <div className="container__modal-avatar">
            <button>
              <img id="4" className="container__modal-img" src={avatar4} alt="" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ModalNewUser;
