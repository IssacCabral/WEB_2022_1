import 'bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import './App.css'

import Create from './components/Create';
import Edit from './components/Edit';
import List from './components/List';
import Home from './components/Home';

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
        <Route path="/create" element={<Create />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  )
}

// class App extends Component{
//   render(){
//     return (
//       <Router>
//         <div className='container'>
//           <h2>Projeto CRUD</h2>
//         </div>
//       </Router>
//     )
//   }
// }

export default App