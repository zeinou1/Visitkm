import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {BASE_URL} from "../../../utils/config.js";


export const hotelInfos = createAsyncThunk('hotelListData', async () => {
    try {
        const res = await fetch(`${BASE_URL}/hotels`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        // Vérifier si la réponse est OK
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        const allHotel = data.data;

        console.log("Hôtels récupérés:", allHotel);
        return allHotel;
    } catch (error) {
        console.log("Erreur lors de la récupération des hôtels:", error.message);

        return [];
    }
});


const initialState = {
    data: [],
    loading: false,
    error: null,
};

const hotelSlice = createSlice({
    name: 'hotelDataList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(hotelInfos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(hotelInfos.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(hotelInfos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default hotelSlice.reducer;





