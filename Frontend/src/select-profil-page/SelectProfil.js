import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAvatarSlice } from "../redux/reducersSlice";

import Avatar from "../component/ui/Avatar";
import AddNewProfil from "../component/ui/AddNewProfil";
import ModalNewUser from "../component/ui/ModalNewUser";

import netflixTitle from "../component/img/netflixTitle.png";
import avatar1 from "../component/img/avatar1.png";
import avatar2 from "../component/img/avatar2.png";
import avatar3 from "../component/img/avatar3.png";
import avatar4 from "../component/img/avatar4.png";
import { BsFillPencilFill } from "react-icons/bs";
import "./SelectProfil.scss";

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

const SelectProfil = () => {
  const [visible, setVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const images = useSelector((state) => state.addAvatar);
  console.log(useSelector((state) => state));

  const visibleRemoveButton = () => {
    setVisible((prev) => !prev);
  };

  const openModalBtn = () => {
    setOpenModal(true);
  };

  return (
    <section className="select__container overflow">
      {openModal && <ModalNewUser closeModal={setOpenModal} />}
      <div className="select__container-nav">
        <img
          src={netflixTitle}
          className="netflix-text"
          alt="netflix logo"
        ></img>
        <button onClick={visibleRemoveButton} className="pen">
          <BsFillPencilFill />
        </button>
      </div>
      <div className="select__container">
        <h1 className="select__container-title">Kto ogląda?</h1>
        <div className="select__container-profile">
          {/* {images?.map((image, index) => (
            <img key={index} src={image}></img>
            // <Avatar key={index} showDeleteButton={visible} src={image} />
          ))} */}
          {images?.map((images, index) => (
            <img>{images}</img>
          ))}
          <AddNewProfil showModal={openModalBtn} />
        </div>
      </div>
    </section>
  );
};

export default SelectProfil;
