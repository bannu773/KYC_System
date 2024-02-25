import {  Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './comp/sign/Signup'
import SignIn from './comp/sign/SignIn'
import Dashboard from './comp/dashboard/Dashboard'

function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
      </Routes>
   
  )
}

export default App