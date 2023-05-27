import React, { createContext, useContext, useEffect, useState } from "react";
import { authApp } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(authApp, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(authApp, email, password);
  };

  const logOut = () => {
    return signOut(authApp);
  };

  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(authApp, googleProvider);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(authApp, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authApp, (currUser) => {
      if (currUser) {
        setUser(currUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, register, login, logOut, googleSignIn, resetPassword }}
    >
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
