import React, { useReducer} from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        if (state < 1) {
          return state;
        } else {
          return state - 1;
        }

      default:
        return state;
    }
  };



  const [initialValue, dispatch] = useReducer(reducer, 0);

  return (
    <div className="d-flex align-items-center justify-content-center mt-5 w-100 flex-column">
      <h3 className="text-white">{initialValue}</h3>
      <div>
        <button
          onClick={() => dispatch({ type: "increment" })}
          type="button"
          className="btn btn-secondary me-4"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          type="button"
          className="btn btn-danger"
        >
          Decrement
        </button>
      </div>

    </div>
  );
};

export default UseReducer;
