import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectImage } from "../redux/reducersSlice";

import Avatar from "../component/ui/Avatar";
import AddNewProfil from "../component/ui/AddNewProfil";
import ModalNewUser from "../component/ui/ModalNewUser";

import netflixTitle from "../component/img/netflixTitle.png";
import { BsFillPencilFill } from "react-icons/bs";
import "./SelectProfil.scss";

const SelectProfil = () => {
  const [saveAvatar, setSaveAvatar] = useState();
  const [visible, setVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const avatar = useSelector((state) => state.addAvatar.image);
  const dispatch = useDispatch();

  const visibleRemoveButton = () => {
    setVisible((prev) => !prev);
  };

  const handleSelectImage = (image) => {
    dispatch(selectImage(image));
  };

  const openModalBtn = () => {
    setOpenModal(true);
  };

  return (
    <section className="select__container overflow">
      {openModal && <ModalNewUser closeModal={setOpenModal} />}
      <div className="select__container-nav">
        <button></button>
        <img
          src={netflixTitle}
          className="netflix-text"
          alt="netflix logo"
        ></img>
        <button onClick={visibleRemoveButton} className="pen" disabled={openModal}>
          <BsFillPencilFill />
        </button>
      </div>
      <div className="select__container">
        <h1 className="select__container-title">Kto ogląda?</h1>
        <div className="select__container-profile">
          {avatar?.map((image, index) => (
            <Avatar
              key={index}
              showDeleteButton={visible}
              src={image.img}
              saveAvatar={() => handleSelectImage(image)}
            />
          ))}
          <AddNewProfil showModal={openModalBtn} />
        </div>
      </div>
    </section>
  );
};

export default SelectProfil;
