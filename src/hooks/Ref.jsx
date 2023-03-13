import React, { useEffect, useRef } from "react";

function Ref() {
  // Hold the null value
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default Ref;
