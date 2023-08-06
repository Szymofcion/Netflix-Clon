import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BsArrowLeftShort } from "react-icons/bs";

import { addAvatarImage } from "../../redux/reducersSlice";

import "./ModalNewUser.scss";

const ModalNewUser = ({ closeModal }) => {
  const [imageSrc, setImageSrc] = useState("");
  const avatar = useSelector((state) => state.addAvatar.image);
  const dispatch = useDispatch();

  const handleAddImage = (img) => {
    const src = img.target.getAttribute("src");
    setImageSrc(src);
    dispatch(addAvatarImage({ img: src }));
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
            {avatar.map((item, index) => (
              <div>
                <button>
                  <img
                    onClick={handleAddImage}
                    key={index}
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
