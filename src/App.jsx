import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import SignUp from './pages/signup/SignUp'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App
