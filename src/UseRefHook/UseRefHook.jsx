import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  let count = useRef(0);
  let inputColor = useRef();
  const [initialValue, currentValue] = useState("");
  const [cValue, updatedValue] = useState(false);

  useEffect(() => {
    count.current = count.current + 1;
    // currentValue((value) => {value += 1});
  }, [initialValue]);

  const changeColor = () => {
    inputColor.current.focus();
    inputColor.current.style.backgroundColor = "red";
    console.log(inputColor);
    updatedValue(!cValue);
  };

  return (
    <>
      <div className="">
        <p>{count.current}</p>
        <input
          ref={inputColor}
          value={initialValue}
          onChange={(event) => currentValue(event.target.value)}
          type="text"
          name="text"
          className="form-control"
        />
        <br />
        <button
          type="button"
          onClick={changeColor}
          className="btn btn-outline-primary"
        >
          {(cValue) ? "You press me" : "Clicked Me Please" }
        </button>
      </div>
    </>
  );
};

export default UseRefHook;
