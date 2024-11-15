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

      // Vérifie si la réponse est dans la plage des statuts de succès
      if (!res.ok) {
        const errorData = await res.json(); // Essaie de récupérer le message d'erreur du backend
        return rejectWithValue(errorData.message || 'Registration failed');
      }

      return await res.json(); // Retourne les données si tout va bien
    } catch (error) {
      // Attrape les erreurs liées au réseau ou à d'autres problèmes inattendus
      return rejectWithValue('An unexpected error occurred', error.message);
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
      state.error = action.payload || action.error.message;
    });
  },
});

export default RegisterUser.reducer;
