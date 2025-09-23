import { UserContext, ColorContext } from './components/MyContext'
import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'

function App() {

  const [user, setUser] = useState({

    name: 'Lisa',
    age: 8
  })

  return (
    <div className='container'>
  <h1>Hook Context</h1>
  
      <UserContext.Provider value={user}>
      <ColorContext.Provider value={'blue'}>
        <Profile />
        </ColorContext.Provider>
      </UserContext.Provider>

    </div>
  );
}


export default App