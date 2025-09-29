import { useEffect, useState } from "react"
import useUpdateDocTitle from '../hooks/UpdateDocTitle'
import Search from "./Search"
import TableUsers from "./TableUsers"


const MyContacts = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [search, setSearch] = useState('')
    const [resultSearch, setResultSearch] = useState([])

    // console.log(users)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setUsers(json)
                setIsLoading(false)
            })
            .catch(error => console.log(error.message))
    }, [])
    // console.log(search)

    useUpdateDocTitle(search);


    const filterUsers = () => {
        const foundUsers = users.filter(user => {
            // console.log(Object.values(user))
            return Object.values(user)
                .join(' ')
                .toLowerCase()
                .includes(search.toLowerCase())
        })

        setResultSearch(foundUsers)
    }

    useEffect(() => {
        if (search !== '') {
            //filter
            filterUsers();
        } else {
            setResultSearch([])
        }
    }, [search]);


    const handleChange = e => {
        setSearch(e.target.value)
    }


    const msgDisplay = (msg, color) => {
        return (
            <span style={{ textAlign: 'center', color: color }}>
                {msg}
            </span>
        )
    }


    return (
        <div>
            {
                isLoading ? msgDisplay('Veuillez Patienter ...', 'red') : (
                    < Search
                        searchStr={search}
                        searchHandler={handleChange}
                    />
                )
            }

            {
                resultSearch.length === 0 && search !== ''
                    ? msgDisplay('Pas de résultats', 'red')
                    : search === '' ? msgDisplay('Veuillez effectuer une recherche', 'green')
                        : < TableUsers
                            dataArray={resultSearch}
                        />
            }

        </div>
    )


}

export default MyContacts
