import { useState } from 'react'

const AddTodoForm = ({ addNewTodo }) => {


    const [addTodo, setAddTodo] = useState('')


    const handleToto = (e) => {
        e.preventDefault()
        addNewTodo(addTodo)

        setAddTodo('')
    }

    return (
        <form className='mt-4' onSubmit={handleToto}>
            <div className='card card-body'>
                <div className='form-group'>
                    <label>Ajouter Todo</label>
                    <input className='form-control' value={addTodo} type='text' onChange={(e) => setAddTodo(e.target.value)}></input>
                    <input className='btn btn-success mt-4' type='submit'></input>
                </div>
            </div>
        </form>
    )
}

export default AddTodoForm