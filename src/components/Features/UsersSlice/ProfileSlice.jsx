import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
//
import {BASE_URL} from "../../../utils/config.js";
// import {id} from "../../../utils/config.js"
// import {token} from "../../../utils/config.js"
//
// console.log(token, id)


export const updateUser = createAsyncThunk(
    "UpdateUser", async ({updateProfile,token,id}) => {
        console.log(token)
        try {
            const res = await fetch(`${BASE_URL}/users/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                Body: JSON.stringify(updateProfile)
            })
            return await res.json()
        } catch (err) {
            console.log(err.message)

        }
    }
)


export const userProfile = createAsyncThunk("profile/DataUser", async ({id, token}) => {

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
        builder.addCase(userProfile.fulfilled, (state, {payload}) => {
            if (payload) {
                state.username = payload.data.username || "Nom inconnu";
                state.email = payload.data.email || "Email inconnu";
            }
        });
        builder.addCase(updateUser.fulfilled, (state, {payload}) => {
            if(payload) {
                state.username = payload.username
            }
        })
    },
});
//!exportation state

export const {initialProfile} = profileSlice.actions;
export default profileSlice.reducer;
