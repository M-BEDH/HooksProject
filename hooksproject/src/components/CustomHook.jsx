import {useState, useEffect} from 'react'
import useUpdateDocTitle from '../hooks/UpdateDocTitle'

function ClickSayHello() {

  const [text, setText] = useState('')
  const [isTrue, setIsTrue] = useState(true)

  useEffect(() => {
      if(isTrue) {
        setText("Bonjour")
      } else {
        setText("Bonsoir")
      }

  }, [isTrue])

  useUpdateDocTitle(text)

  return (
    <div style={{textAlign: "center", margin: "1rem"}}>
      <button  onClick={() => setIsTrue(!isTrue)}>Cliquez</button>
    </div>
  )
}

export default ClickSayHello
