/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedUser = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);
console.log("ProtectedUser",isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.clear(); 
      navigate("/");
    } else {
      sessionStorage.setItem("isAuthenticated", "true");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
};

export default ProtectedUser;
