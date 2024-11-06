import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./../pages/Home.jsx";
import Hotel from "./../pages/Hotel.jsx";
import HotelDetails from "./../pages/HotelDetails.jsx";
import SearchResultList from "./../pages/SearchResultList";
import Login from "./../pages/Login.jsx";
import Register from "./../pages/Register.jsx";
import Confirmation from "../components/Confirmation/Confirmation.jsx";
import Merci from "../components/Confirmation/paymentsmethode/Merci.jsx";
import ProtectedUser from "../components/users/userProtected/ProtectedUser";
import Profile from "../components/users/Profile.jsx";
import {useSelector} from "react-redux";


const Routers = () => {
  const {connected} = useSelector((state) => state.user)
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/hotels' element={<Hotel />} />
      <Route path='/hotels/:id' element={<HotelDetails />} />
      <Route path='/login/' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route path='/users/:id' element={<ProtectedUser><Profile /></ProtectedUser>} />


      <Route path='/hotel/search' element={<SearchResultList />} />
      <Route path='/confirmation/:id' element={<Confirmation />} />
      <Route path='/merci' element={<Merci />} />
    </Routes>
  )
}
export default Routers