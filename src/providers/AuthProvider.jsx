import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
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
  });

  const userDate = {
    user,
    setUser,
    signUp,
  };

  return <AuthContext value={userDate}>{children}</AuthContext>;
};

export default AuthProvider;
