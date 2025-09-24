import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reinitialiser":
      return initialState;
    default:
      return state;
  }
};

function Count() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Compteur</h1>
      <h2>{count}</h2>
      <button
        className="btn btn-success m-2"
        onClick={() => dispatch("increment")}
      >
        {" "}
        +{" "}
      </button>
      <button
        className="btn btn-danger m-2"
        onClick={() => dispatch("decrement")}
      >
        {" "}
        -{" "}
      </button>
      <button
        className="btn btn-warning m-2"
        onClick={() => dispatch("reinitialiser")}
      >
        {" "}
        Reset{" "}
      </button>
    </div>
  );
}

export default Count;
