import React from "react";
import { useState } from "react";
import "../../styles/styles.scss";
import PopupContent from "./PopupContent";

function PopupModal() {
  const [openModal, setopenModal] = useState(false);
  return (
    <>
      <div>
        <h1>React Popup Modal</h1>
        <button onClick={() => setopenModal(!false)}>Open Modal</button>
      </div>

      <PopupContent openModal={openModal} setopenModal={setopenModal} />
    </>
  );
}

export default PopupModal;
