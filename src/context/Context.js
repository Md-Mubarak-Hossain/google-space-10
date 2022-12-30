import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
export const AuthContext = createContext();
const auth = getAuth(app)
const Context = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const createUser = (email, password, name, photoURL) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, name, photoURL)
    }

    // const signUp = (email, password) => {
    //     setLoading(true)
    //     return createUserWithEmailAndPassword(auth, email, password)
    // }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const gitHubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }

    const authInfo = { user, loading, createUser, logIn, logOut, googleSignIn, gitHubSignIn };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default Context;