import React from "react";
import { useState } from "react";
import "../styles/styles.scss";
import data from "../data.json";

function DOMRef() {
  const [isActive, setisActive] = useState(false);
  //   const toggleClass = ()

  const toggleBetween = (item) => {
    isActive !== item ? setisActive(item) : setisActive(false);
    // console.log(isActive !== item)
    console.log(item);
  };
  return (
    <div className="accordion">
      <div className="accordion-container">
        <div>
          <ul className="accordion-content-first">
            {data.accordion.map((item, index) => {
              return (
                <>
                  {isActive === index && (
                    <li className="accordion-container__text" key={item.id}>
                      {/* {item.content} */}
                      <span>{item.content}</span>
                    </li>
                  )}

                  <button
                    className="accordion-button--first"
                    onClick={() => toggleBetween(index)}
                  >
                    click
                  </button>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DOMRef;
