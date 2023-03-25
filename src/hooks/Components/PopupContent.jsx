import React, { useEffect, useRef } from "react";
import "../../styles/styles.scss";

function PopupContent({ openModal, setopenModal }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (closeRef.current && !closeRef.current.contains(event.target)) {
        setopenModal && setopenModal(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true); // The ref to the ummounted the modal container after the click event is removed when triggered outside the modal container.
    };
  }, [closeRef, setopenModal]);

  return openModal ? (
    // <div className="popup">
    <div className="popup-modal">
      <div className="popup-modal-container" ref={closeRef}>
        <button
          className="popup-modal-close-btn"
          onClick={() => setopenModal(false)}
        >
          x
        </button>
        <h4>Some Popup modal</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          tempore enim repudiandae natus voluptatem quasi vel, a, omnis quis
          magnam ullam magni dolorum praesentium assumenda et nisi sunt, in
          aspernatur.
        </p>
      </div>
    </div>
  ) : (
    // </div>
    ""
  );
}

export default PopupContent;
