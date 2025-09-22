import { useState, useEffect } from 'react'

const FunctionCount = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {

        setTimeout(() => {
            document.title = `Vous avez cliqué ${count} fois`
        }, 2000)

    })

    return (
        <div>
            <h1> {count} </h1>
            <button onClick={() => setCount(count + 1)}>Count useEffect</button>
   
        </div>
    )
}
export default FunctionCount;