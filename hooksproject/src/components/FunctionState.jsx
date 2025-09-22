import { useState } from 'react'

const FunctionState = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <p> Fonction State : {counter}  </p>
            <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>State dans une fonction</button>

        </div>
    )
}
export default FunctionState;