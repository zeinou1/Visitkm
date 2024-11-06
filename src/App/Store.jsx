import {configureStore} from "@reduxjs/toolkit";

import userReducer from "../components/Features/UsersSlice/LoginSlice.jsx";
import userProfile from "../components/Features/UsersSlice/ProfileSlice.jsx";
import addUserReducer from "../components/Features/UsersSlice/RegisterSlice.jsx"
import AddHotelReducer from '../components/Features/Hotel/HotelSlice.jsx'

const store = configureStore({
    reducer: {
        //! import reducers here
        user: userReducer,
        profile: userProfile,
        register: addUserReducer,
        hotel: AddHotelReducer,
    },
});

export default store;
