import Button from "./components/Button";
import { useState, useCallback } from "react";
import ProgressBar from "./components/ProgressBar";

function App() {

  const [countOne, setCountOne] = useState({
    value: 0,
    btnColor: "success",
    increment: 25,
  });


  const [countTwo, setCountTwo] = useState({
    value: 0,
    btnColor: "danger",
    increment: 20,
  });

const incrementCountOne = useCallback((val) => {
  countOne.value < 100 && setCountOne({...countOne, value: countOne.value + val });
}, [countOne]);


  // const incrementCountOne = useCallback(() => {
  //   setCountOne((state) =>
  //     state.value < 100 ? { ...state, value: state.value + state.increment } : state
  //   );
  // }, []);


   const incrementCountTwo = useCallback((val) => {
  countTwo.value < 100 && setCountTwo({...countTwo, value: countTwo.value + val });
}, [countTwo]);


  // const incrementCountTwo = useCallback(() => {
  //   setCountTwo((state) =>
  //     state.value < 100 ? { ...state, value: state.value + state.increment } : state
  //   );
  // }, []);




  return (
    <div className="container text-center mt-5">
      <ProgressBar
        text="Count 1"
        count={countOne.value}
        bgColor={countOne.btnColor}
      />

      <ProgressBar
        text="Count 2"
        count={countTwo.value}
        bgColor={countTwo.btnColor}
      />

      <Button btnColor={countOne.btnColor} handleClick={incrementCountOne}>
        Count 1 +{countOne.increment}%
      </Button>
      <Button btnColor={countTwo.btnColor} handleClick={incrementCountTwo}>
        Count 2 +{countTwo.increment}%
      </Button>
    </div>
  );
}

export default App;
