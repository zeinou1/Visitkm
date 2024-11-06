/* eslint-disable react/prop-types */
//! Gestion de connexion, déconnexion, mise à jour etc...

import { createContext, useEffect, useReducer } from "react";

//!state initial
const initialState = {
  user:
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  loading: false,
  error: null,
};

// create context

export const AuthContext = createContext(initialState);

//  create reducer (login)
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "REGISTER_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGOUT":
      // localStorage.removeItem("user");
      localStorage.clear();
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

// create Provider
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  // stock user infos a the localStorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  // retourn provider
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//TODO! import  authContextProvider in the index.jsx
