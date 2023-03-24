import React from "react";
import "../styles/styles.scss";

function PopupContent({ openModal, setClosePopup }) {
  return openModal ? (
    <div className="popup">
      <div className="popup-modal">
      <div className="popup-modal-container">

        <button
          className="popup-modal-close-btn"
          onClick={() => setClosePopup(false)}
        >
          x
        </button>
        <h4>Some PopUp modal</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          tempore enim repudiandae natus voluptatem quasi vel, a, omnis quis
          magnam ullam magni dolorum praesentium assumenda et nisi sunt, in
          aspernatur.
        </p>
      </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopupContent;
