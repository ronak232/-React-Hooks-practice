import React from "react";
import { useState } from "react";
import "../styles/styles.scss";

function DOMRef() {
  const [isActive, setisActive] = useState(true);
  //   const toggleClass = ()
  const toggleBetween = (value) => {
    if (isActive === value) {
      return setisActive(true);
    }
    setisActive(value);
  };
  return (
    <div className="accordion">
      <div className="accordion-container">
        <div className="accordion-content-first">
          <button
            className="accordion-button--first"
            onClick={() => toggleBetween(!true)}
          >
            Open According 1
          </button>

          <div
            className={
              isActive
                ? "accordion-container__text--show"
                : "accordion-container__text"
            }
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos illo dolores, temporibus odit aliquam sint excepturi
            aperiam omnis necessitatibus ipsa?
          </div>
        </div>
        <div className="accordion-content-second">
          <button
            className="accordion-button--second"
            onClick={() => toggleBetween(!true)}
          >
            Open According 2
          </button>
          <div
            className={
              isActive
                ? "accordion-container__text"
                : "accordion-container__text--show"
            }
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos illo dolores, temporibus odit aliquam sint excepturi
            aperiam omnis necessitatibus ipsa Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eum, accusamus dolores dignissimos
            alias repudiandae animi itaque rerum neque soluta consequatur
            assumenda consectetur quaerat sequi! Tempora ab atque obcaecati vel
            autem?
          </div>
        </div>
      </div>
    </div>
  );
}

export default DOMRef;
