import React, { Children, useContext } from 'react'
import { FirebaseContext } from '../store/firebaseContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const { user } = useContext(FirebaseContext);

    if (!user) {
        return <Navigate to='/login' />;
    }

    return Children;
}

export default ProtectedRoute