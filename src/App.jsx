import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import LoginPage from './pages/Login'
import SignupPage from './pages/Signup'
import ViewPost from './pages/ViewPost'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-up' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/create-post' element={<Create />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App