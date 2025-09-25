import { useState } from "react"
import useUpdateDocTitle from '../hooks/UpdateDocTitle'
import Search from "./Search"

const MyContacts = () => {

    const [search, setSearch] = useState('')

    const handleChange = e => {
        setSearch(e.target.value)
    }

    useUpdateDocTitle(text)

    return (
        <div>
            <Search
                searchStr={search}
                searchhandler={handleChange}
            />
        </div>
    )
}

export default MyContacts
