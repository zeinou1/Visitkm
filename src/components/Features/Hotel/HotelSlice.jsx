import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {BASE_URL} from "../../../utils/config.js";

// API



export const hotelAdd = createAsyncThunk(
    "hotelAdd/hotel",
    async (payload) => {
      console.log(payload);
      
        //TODO: l utilisation de paylod en destructuration permet d éviter les erreurs de token undefined 
      const { hotelData, token } = payload; 

      console.log("Test backend", token);

      try {
        const res = await fetch(`${BASE_URL}/hotels`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(hotelData),
        });
        return await res.json();
      } catch (error) {
        console.log("erreur sumbitData");
  
        throw new Error('Erreur ',error.message);
        // return rejectWithValue(error.data.message);
      }
    }
  );

// initialState
// eslint-disable-next-line react-refresh/only-export-components
const AddHotel = createSlice({
    name: "hotel",
    initialState: {
        loading: false,
        error: "",
        title: "",
        city: "",
        address: "",
        distance: "",
        price: "",
        maxGroupSize: "",
        desc: "",
        photo: "",
        featured: false,
        reviews: [],
        token: "",
    },
    extraReducers: (builder) => {
        builder.addCase(hotelAdd.pending, (state) => {
            state.loading = false;
            state.error = null;
            state.hotel = null
        });
        builder.addCase(hotelAdd.fulfilled, (state, {payload}) => {
            if (payload) {
                state.hotel = payload;
                state.error = null;
                state.loading = false;
                state.token = payload.token;
            }
        });
        builder.addCase(hotelAdd.rejected, (state, action) => {
            state.loading = false;
            state.hotel = null;
            state.error = null;
            if (action.error.message === "Erreur add hotel") {
              state.error = "Add hotel failed";
            } else {
          state.error = action.error.message;
            }
        });
    }
})

export default AddHotel.reducer