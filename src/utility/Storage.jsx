import fireBase from "./firebaseSetUp";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
("firebase/auth");

import { configureStore, createSlice } from "@reduxjs/toolkit";

import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const initialState = {
  user: false,
  userID: null,
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: initialState,
  reducers: {
    login(state) {
      console.log("its execute");
      state.user = true;
      state.userID = "4";
    },
    logOut() {},
  },
});

export const userInfoAction = userInfoSlice.actions;

const store = configureStore({
  reducer: {
    userInfo: userInfoSlice.reducer,
  },
});

export default store;

const firebaseAuth = getAuth(fireBase);


export async function registration(data) {
 
  const response=  createUserWithEmailAndPassword(
    firebaseAuth,
    data.email,
    data.password
  );

  if(!response.ok){
    const error= new Error('An error occurred while register the user');
    error.code=response.status;
    
  }

 

  return response;
}
