import './App.css'
import Profile from './components/Profile'
import { Component } from 'react'

class App extends Component() {

  state = {
    user: {
      name: 'Lisa',
      age: 8
    }
  }

  render() {

    return (
      <div>

        <Profile />

      </div>
    )
  }
}

export default App