import React from 'react'
import { Navigate, Route, Outlet } from "react-router-dom";
import { useAuth } from './context/AuthContext';

export default function PrivateRoute({component: Component, ...rest}) {

    const {currentUser} = useAuth()
    
    
    return currentUser ? <Outlet /> : <Navigate to="/signin" />;
}