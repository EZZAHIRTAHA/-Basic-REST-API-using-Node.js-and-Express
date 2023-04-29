import React from 'react'
import {useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Login, Register, Dashboard } from './pages'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  )
}

export default App
