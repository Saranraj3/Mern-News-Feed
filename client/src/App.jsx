import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import ProtectedRoute from "./Authentication/ProtectedRoute";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
    setAuthenticated(true);
  };

  const signup = () => {
    setAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login onlogin={login} />} />
        <Route path="/signup" element={<Signup onsignup={signup} />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute
              authenticated={authenticated}
              component={<Home />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
