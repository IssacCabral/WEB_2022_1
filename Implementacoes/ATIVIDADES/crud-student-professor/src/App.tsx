import 'bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import './App.css'

import CreateStudent from './components/Student/CreateStudent'
import EditStudent from './components/Student/EditStudent'
import ListStudent from './components/Student/ListStudent'
import Home from './components/Home'

function App() {
  return (
    <div className="container">
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to={'/'} className="navbar-brand">CRUD</Link>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to={'/'} className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to={'/create'} className='nav-link'>Create</Link>
            </li>
            <li className='nav-item'>
              <Link to={'/list'} className='nav-link'>List</Link>
            </li>
          </ul>
        </div>
      </nav>

      <h2>Projeto CRUD</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateStudent />} />
        <Route path="/edit" element={<EditStudent />} />
        <Route path="/list" element={<ListStudent />} />
      </Routes>
    </div>
  )
}

export default App