import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 
import auth from './../firebase/firebase.init';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email,password);
    }

    const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password);
    }

    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithGoogle(auth, googleProvider)
    }

    const logOut =() =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {user, loading, createUser, signInUser, signInWithGoogle, logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;

AuthProvider.propTypes = { // for props type .
    children: PropTypes.node
}