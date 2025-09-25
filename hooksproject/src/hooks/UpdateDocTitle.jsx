import { useState, useEffect } from 'react'

const useUpdateDocTitle = (arg) => {

  const [text, setText] = useState('')

  useEffect(() => {
    console.dir(document);
    document.title = `Titre : ${arg}`
  }, [arg])

  return (
    <div>

    </div>
  )
}

export default useUpdateDocTitle
