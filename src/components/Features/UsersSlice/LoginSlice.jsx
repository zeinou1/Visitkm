import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//! axios
import axios from "axios";
//! Base_Url
import { BASE_URL } from "../../../utils/config.js";

//!API
export const loginUser = createAsyncThunk("user/loginUser", async (login,{ rejectWithValue}) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, login);
    const data = res.data;
    console.log("Nos données",data);
  //! le token n est pas tout le emps dans le body
    const token = data.token; 
    localStorage.setItem('token',JSON.stringify(token));

    return data;
  } catch (error) {
    // console.error("Erreur dans le bloc catch:", error.message);
    return rejectWithValue(error.data.message);
  }
});

//!initialState
const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
    token: "" ,
    // connected: !!localStorage.getItem('token'),//? rester connecter meme apres actualisation de la pasge  !!localStorage.getItem('userToken')
    id: localStorage.getItem('userId') || null,
    isAuthenticated: "",
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = "";
      localStorage.removeItem('userId'); 
      localStorage.removeItem('user'); 
      localStorage.removeItem('userToken'); 
    },
  },
  //TODO! ExtraReducers
  extraReducers: (builder) => {
    builder
      builder.addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isAuthenticated = false;
        state.user = null;
      })
      builder.addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.data;
        state.token = payload.data.token;
        state.error = null;
        state.id = payload?._id;
        state.isAuthenticated = true;
        localStorage.setItem('userToken', payload.token);
        localStorage.setItem('userId', payload.data._id);
      })
      builder.addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        if (action.error.message === "Login failed") {
          state.error = "Email or password incorrect";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

//! export reducers in the store
export const { logout } = userSlice.actions;
export default userSlice.reducer;
