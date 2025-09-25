import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css'

import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

import PrivateRoute from './components/PrivateRoute';


function App() {

    // const [isAdmin, setAdmin] = useState(true);   -> protect route true si admin pour voir le profil

    const [isAdmin, setAdmin] = useState(false);

    return (
        <div className='divRouter'>
            <Router>
                <nav className='navBar'>
                    <Link to="/">Home</Link> | <Link to="/about">About</Link> |  <Link to="/profile">Profile</Link>
                </nav>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />

                    <Route path='/profile'
                        element={<PrivateRoute isAdmin={isAdmin}>
                            <Profile />
                        </PrivateRoute>} />

                </Routes>
            </Router>
        </div>
    )

}

export default App;