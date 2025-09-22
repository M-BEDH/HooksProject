import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import AddTodoForm  from './AddTodoForm'


const Todo = () => {

    const[todos, setTodos] = useState([
        {id: 1, todo: 'Acheter du beurre'},
        {id: 2, todo: 'Prendre un pain de campagne'},
        {id: 3, todo: 'Acheter du fromage'}
    ])

    const myTodos = todos.map(todo => {
        return (
            <li className="list-group-item" key={todo.id}>{todo.todo}</li>    
        )
    })

    const addNewTodo = (newTodo) => {
        const newid = uuidv4

        setTodos([ ...todos, {
            id: newid ,
            todo: newTodo
        }])
    }



return (
    <div>
      <h1> Il y a {todos.length} To-do</h1>

        <ul className='list-group'>
          {myTodos}
        </ul>

        <AddTodoForm addNewTodo={addNewTodo}/>

    </div>
)
}
export default Todo;