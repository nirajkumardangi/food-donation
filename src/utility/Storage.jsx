/* This code snippet is setting up Firebase authentication in a React application. Here's a breakdown
of what it does: */
import fireBase from "./firebaseSetUp";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";
import { QueryClient } from "@tanstack/react-query";
import { createContext, useContext } from "react";
export const firebaseAuth = getAuth(fireBase);
export const useFirebase = () => useContext(firebaseContext);


const queryClient = new QueryClient();
export default queryClient;
const firebaseContext = createContext(null);
const googleProvider = new GoogleAuthProvider();


export const FirebaseProvider = (props) => {   //function for render app component 

  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      user ? setUser(user) : null;
    });
  }, []);

  const isLogin = user ? true : false;



  async function registration(data) {     //  function for register the user
    try {
      const response = await createUserWithEmailAndPassword(
        firebaseAuth,
        data.email,
        data.password
      );

      return response;
    } catch (error) {
      error.title = "Registration Unsuccessful";
      throw error;
    }
  }

  async function Login(data) {             // function that is responsible  for Login 
    
  
    console.log("login function called");

    try {
      const response = await signInWithEmailAndPassword(
        firebaseAuth,
        data.email,
        data.password
      );

      return response;
    } catch (error) {
      error.title = "Login Unsuccessful";
      throw error;
    }
  }

  async function loginWithGoogle() {          // function that is responsible for login via google
    console.log("login With Google");
    try {
      const response = await signInWithPopup(firebaseAuth, googleProvider);
      return response;
    } catch (error) {
      error.title = "Google Sign In Unsuccessful";
      throw error;
    }
  }


  async function signOutFunction(){          // function  that is responsible for logout
    
  
     try {
      const response = await signOut(firebaseAuth);
      setUser(null);
      return response;
    } catch (error) {
      error.title = "Google Sign In Unsuccessful";
      throw error;
    }
  }

  return (
    <firebaseContext.Provider
      value={{ registration, Login, loginWithGoogle, isLogin, signOutFunction }}
    >
      {props.children}
    </firebaseContext.Provider>
  );
};
