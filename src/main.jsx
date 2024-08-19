import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FirebaseProvider } from './store/firebaseContext.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <FirebaseProvider>
            <App />
            <ToastContainer />
        </FirebaseProvider>
    </StrictMode >
)
