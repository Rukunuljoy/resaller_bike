import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../../firebase/firebase.config';

const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading,setLoading] =useState(true)

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            
        })
            return ()=>{
                return unsubscribe();
            }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;