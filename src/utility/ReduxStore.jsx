import { configureStore, createSlice } from "@reduxjs/toolkit";



                                          //=============> initializing  state for store data
const initialState = {
  user: null,
  isAuthorized: false,
};


const userInfoSlice = createSlice({          //=============> Redux slice to store user related data
  name: "userInfo",
  initialState: initialState,
  reducers: {
    login(state,action) {
      console.log("its execute");
      state.user = action.payload,
      state.userID = true;
    },
    logOut() {},
  },
});

export const userInfoAction = userInfoSlice.actions;



const store = configureStore({               //=============>storage
  reducer: {
    userInfo: userInfoSlice.reducer,
  },
});

export default store;
