/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ProtectedUser = ({ children }) => {
  const navigate = useNavigate();
  const {isAuthenticated }= useSelector((state) => state.user);

  console.log('user not connectetd', isAuthenticated);
  

  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.removeItem("token");
      localStorage.removeItem('userToken');
      localStorage.removeItem("userId");
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
};
export default ProtectedUser;