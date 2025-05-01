import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        // const uid = currentUser.uid;
        setUser(currentUser);
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
    logOut,
  };

  return <AuthContext value={userDate}>{children}</AuthContext>;
};

export default AuthProvider;
