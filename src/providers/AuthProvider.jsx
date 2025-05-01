import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        // const uid = currentUser.uid;
        setUser(currentUser);
        setLoading(false);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const userDate = {
    user,
    setUser,
    signUp,
    logIn,
    logOut,
    loading,
  };

  return <AuthContext value={userDate}>{children}</AuthContext>;
};

export default AuthProvider;
