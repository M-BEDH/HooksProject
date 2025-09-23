import { useReducer } from "react";

const initilaState = 0;

const reducer = (state, action) => {

}

function Count() {
    const [count, dispatch] = useReducer(reducer, initilaState)

    return (
        <div>
          <h1>{count}</h1>
          <button className="btn btn-success m-3"> + </button>
          <button className="btn btn-danger m-3"> - </button>
        </div>
    )
}