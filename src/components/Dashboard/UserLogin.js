import Dashboard from "./Form/Dashboard";
import Login from "./Form/Login";
import Register from "./Form/Register";
import "./components/subcomponents/style.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useContext } from 'react';
import { AuthContext } from "./context/AuthContext";

function UserLogin() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/Login" />;
    }

    return children
  };

  return (
    // <BrowserRouter>
      
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          
        </Route>
      </Routes>
    // </BrowserRouter>
  );
}

export default UserLogin