import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Hamad Ismail',
    email: 'hamad.ismail.gub@gmail.com',
  });

  const userDate = {
    user,
  };

  return <AuthContext value={userDate}>{children}</AuthContext>;
};

export default AuthProvider;
