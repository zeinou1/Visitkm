import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//
import { BASE_URL } from "../../../utils/config.js";
// import {id} from "../../../utils/config.js"
// import {token} from "../../../utils/config.js"
//
// console.log(token, id)
export const updateUser = createAsyncThunk(
  "UpdateUser",
  async ({ updateProfile, token, id }) => {
    console.log("payload profile", updateProfile);
    try {
      const res = await fetch(`${BASE_URL}/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateProfile),
      });
      if (!res.ok) {
        throw new Error("Une erreur est survenue");
      }
      return await res.json();
    } catch (err) {
      console.log("payload profile", err);
      console.log(err.message);
    }
  }
);

export const userProfile = createAsyncThunk("profile/DataUser", async ({ id, token }) => {
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
// delete user
export const deleteUser = createAsyncThunk("deleteUser", async ({ id, token }) => {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.json();
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
    builder;
    builder.addCase(userProfile.fulfilled, (state, { payload }) => {
      if (payload) {
        state.username = payload.data.username || "Nom inconnu";
        state.email = payload.data.email || "Email inconnu";
        state.id = payload.data._id || "id inconnu";
      }
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      if (payload) {
        // console.log("Update User Payload:", payload); // Log the payload for debugging
        state.username = payload.username;
      }
    });
    builder.addCase(deleteUser.fulfilled, (state, { payload }) => {
      if (payload) {
        console.log("Delete User Payload:", payload);
      }
    });
  },
});
//!exportation state

export const { initialProfile } = profileSlice.actions;
export default profileSlice.reducer;
