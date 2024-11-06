import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config.js";

export const addUser = createAsyncThunk(
  "addUser/register",
  async (register, { rejectWithValue }) => {
    console.log(register);
    
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(register),
      });
      return await res.json();
    } catch (error) {
      console.log("erreur message");

      // throw new Error('Erreur ',error.message);
      return rejectWithValue(error.data.message);
    }
  }
);

// eslint-disable-next-line react-refresh/only-export-components
const RegisterUser = createSlice({
  name: "register",
  initialState: {
    username: "",
    email: "",
    password: "",
    error: "",
    loading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(addUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.register = null;
    });
    builder.addCase(addUser.fulfilled, (state, { payload }) => {
      if (payload) {
        state.register = payload;
        state.error = null;
        state.loading = false;
      }
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.loading = false;
      state.register = null;
      if (action.error.message === "Email already in use") {
        state.error = "Email already in use";
      } else {
        state.error = action.error.message;
      }
    });
  },
});

export default RegisterUser.reducer;
