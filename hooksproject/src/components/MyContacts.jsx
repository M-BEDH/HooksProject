import { useState } from "react"
import useUpdateDocTitle from '../hooks/UpdateDocTitle'
import Search from "./Search"

const MyContacts = (text) => {

    const [search, setSearch] = useState('')
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
