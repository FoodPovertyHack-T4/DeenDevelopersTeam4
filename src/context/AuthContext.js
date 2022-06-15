import React, { useContext, useState, useEffect, createContext } from 'react'
import { auth } from '../Utils/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        const unSubscriber = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unSubscriber
    },[])

    function signUp(email,password) {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const value = {
        currentUser,
        signUp
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider