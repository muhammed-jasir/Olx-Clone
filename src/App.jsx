import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import LoginPage from './pages/Login'
import SignupPage from './pages/Signup'
import ViewPost from './pages/ViewPost'
import ScrollToTop from './components/ScrollToTop'
import ForgotPassword from './components/ForgotPassword'
import { PostProvider } from './store/postContext'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
    return (
        <PostProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/signup' element={<SignupPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/forgot-password' element={<ForgotPassword />} />
                    <Route path='/create-post'
                        element={
                            <ProtectedRoute>
                                <Create />
                            </ProtectedRoute>
                        }
                    />
                    <Route path='/view-post/:postId' element={<ViewPost />} />
                </Routes>
            </BrowserRouter>
        </PostProvider>
    )
}

export default App