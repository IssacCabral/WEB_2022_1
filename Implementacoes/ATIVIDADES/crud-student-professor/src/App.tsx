import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link} from 'react-router-dom'
import './App.css'

import CreateStudent from './components/Student/CreateStudent'
import EditStudent from './components/Student/EditStudent'
import ListStudent from './components/Student/ListStudent'
import Home from './components/Home'

import CreateProfessor from './components/Professor/CreateProfessor'
import ListProfessor from './components/Professor/ListProfessor'
import EditProfessor from './components/Professor/EditProfessor'

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
              <Link to={'/createStudent'} className='nav-link'>CreateStudent</Link>
            </li>
            <li className='nav-item'>
              <Link to={'/crud/listStudents'} className='nav-link'>ListStudents</Link>
            </li>

            <li className='nav-item'>
              <Link to={'/createProfessor'} className='nav-link'>CreateProfessor</Link>
            </li>
            <li className='nav-item'>
              <Link to={'/listProfessors'} className='nav-link'>ListProfessors</Link>
            </li>

          </ul>
        </div>
      </nav>

      <h2>Projeto CRUD</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crud/createStudent" element={<CreateStudent />} />
        <Route path="/crud/editStudent/:id" element={<EditStudent />} />
        <Route path="/crud/listStudents" element={<ListStudent />} />
        <Route path="/crud/createProfessor" element={<CreateProfessor />} />
        <Route path="/crud/editProfessor/:id" element={<EditProfessor />} />
        <Route path="/crud/listProfessors" element={<ListProfessor />} />
      </Routes>
    </div>
  )
}

export default App