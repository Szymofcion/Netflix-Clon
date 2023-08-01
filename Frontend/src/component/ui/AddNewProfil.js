
import { BsPlus } from "react-icons/bs";


import "./AddNewProfil.scss";

const AddNewProfil = ({showModal}) => {


  return (
      <button className="button-modal" onClick={showModal}>
        <div className="select__container-new">
          <BsPlus fontSize={75} />
        </div>
      </button>
  );
};

export default AddNewProfil;
