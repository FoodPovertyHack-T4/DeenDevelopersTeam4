import React, { useContext, useState, useEffect, createContext } from 'react'
import { auth } from '../Utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const unSubscriber = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unSubscriber
    },[])

    function signUp(email,password) {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    function signIn(email,password) {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const value = {
        currentUser,
        signUp,
        signIn
    }

    return (
        <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
    )
}

export default AuthProvider