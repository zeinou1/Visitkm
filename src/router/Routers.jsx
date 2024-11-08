import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Confirmation from "../components/Confirmation/Confirmation.jsx";
import Merci from "../components/Confirmation/paymentsmethode/Merci.jsx";
import Profile from "../components/users/Profile.jsx";
import ProtectedUser from "../components/users/userProtected/ProtectedUser"; 
import Home from "./../pages/Home.jsx";
import Hotel from "./../pages/Hotel.jsx";
import HotelDetails from "./../pages/HotelDetails.jsx";
import Login from "./../pages/Login.jsx";
import Register from "./../pages/Register.jsx";
import SearchResultList from "./../pages/SearchResultList";

const Routers = () => {


  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/hotels" element={<Hotel />} />
      <Route path="/hotels/:id" element={<HotelDetails />} />
      <Route path="/login/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/users/:id"
        element={
          isAuthenticated ? (
            <ProtectedUser>
              {" "}
              <Profile />{" "}
            </ProtectedUser>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route path="/hotel/search" element={<SearchResultList />} />
      <Route path="/confirmation/:id" element={<Confirmation />} />
      <Route path="/merci" element={<Merci />} />
    </Routes>
  );
};
export default Routers;
