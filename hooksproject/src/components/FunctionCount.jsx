import { useState, useEffect } from 'react'

const FunctionCount = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    //  useEffect(() => {

    //     setTimeout(() => {
    //         document.title = `FunctionCount cliqué ${count} fois`
    //     }, 2000)

    //  })

    useEffect(() => {
        console.log('Mise à jour du titre via useEffect')
        document.title = `FunctionCount cliqué ${count} fois`
    }, [count])


    return (
        <div>
            <h1> {count} FunctionCount</h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Function count useEffect</button>
        </div>
    )
}
export default FunctionCount;