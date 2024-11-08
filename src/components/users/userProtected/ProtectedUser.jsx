/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedUser = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.removeItem("token");
      localStorage.removeItem("userToken");
      localStorage.removeItem("userId");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userToken");
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("isAuthenticated");

      navigate("/");
    } else {
      sessionStorage.setItem("isAuthenticated", "true");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
};

export default ProtectedUser;
