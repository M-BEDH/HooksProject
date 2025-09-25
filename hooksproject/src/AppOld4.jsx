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


  // version moins optimale car on dépend de countOne dans le tableau de dépendance et on passe un argument val

  // const incrementCountOne = useCallback((val) => {
  //   countOne.value < 100 && setCountOne({...countOne, value: countOne.value + val });
  // }, [countOne]);   ---> ici on utilise countOne dans la fonction donc on doit le mettre dans le tableau de dépendance
  //  car sinon la fonction ne sera pas mise à jour si countOne change contrairement à la version optimisée
  //  qui utilise le state précédent de la fonction de mise à jour




  // version plus optimisé car on utilise la fonction de mise à jour avec le state précédent
  const incrementCountOne = useCallback(() => {
    setCountOne((state) =>
      state.value < 100
        ? { ...state, value: state.value + state.increment }
        : state
    );
}, []); // tableau de dependance vide car on n'utilise pas de variable externe dans la fonction




  // version moins optimale car on dépend de countTwo dans le tableau de dépendance et on passe un argument val

  //   const incrementCountTwo = useCallback((val) => {
  //     countTwo.value < 100 && setCountTwo({...countTwo, value: countTwo.value + val });
  // }, [countTwo]);   ---> ici on utilise countTwo dans la fonction donc on doit le mettre dans le tableau de dépendance
  //   car sinon la fonction ne sera pas mise à jour si countTwo change contrairement à la version optimisée
  //  qui utilise le state précédent de la fonction de mise à jour





  // version plus optimisé car on utilise la fonction de mise à jour avec le state précédent
  const incrementCountTwo = useCallback(() => {
    setCountTwo((state) =>
      state.value < 100
        ? { ...state, value: state.value + state.increment }
        : state
    );
  }, []); // tableau de dependance vide car on n'utilise pas de variable externe dans la fonction




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
