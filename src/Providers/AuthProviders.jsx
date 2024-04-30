import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FIrebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
   


    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }
   

    const logOut = () => {
        setLoading(true);
        setUser(null);
        signOut(auth);
      };

      useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log("user in the auth state changed", currentUser);
          setUser(currentUser);
          setLoading(false);
        });
        return () => {
          unSubscribe();
        };
      }, []);

    const userInfo = {
        user,
        createUser,
        loading,
        logOut,
        signInUser,
        googleLogin,
        githubLogin,
        
    };
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProviders.propTypes = {
    children: PropTypes.node,
}
export default AuthProviders;