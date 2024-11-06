import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//
import { BASE_URL } from "../../../utils/config.js";

export const userProfile = createAsyncThunk("profile/DataUser", async ({id,token}) => {
  
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  // console.log("Test for data",data);

  return data;
});

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    username: "",
    email: "",
    id: "",
  },
  reducers: {
    initialProfile: (state) => {
      state.username = "";
      state.email = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userProfile.fulfilled, (state, { payload }) => {
      if (payload) {
        state.username = payload.data.username || "Nom inconnu";
        state.email = payload.data.email || "Email inconnu";
      }
    });
  },
});
//!exportation state

export const { initialProfile } = profileSlice.actions;
export default profileSlice.reducer;
