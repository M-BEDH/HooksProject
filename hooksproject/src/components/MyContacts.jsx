import { useState } from "react"
import useUpdateDocTitle from '../hooks/UpdateDocTitle'
import Search from "./Search"

const MyContacts = (text) => {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    // console.log(search)

    useUpdateDocTitle(text)

    const handleChange = e => {
        setSearch(e.target.value)
    }

    return (
      
            <Search
                searchStr={search}
                searchHandler={handleChange}
            />
      
    )
}

export default MyContacts
