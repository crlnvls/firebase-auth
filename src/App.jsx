import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import * as Pages from "./pages";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Pages.Home />}></Route>
          <Route path="/register" element={<Pages.Register />}></Route>
          <Route path="/login" element={<Pages.Login />}></Route>
          <Route
            path="/welcome"
            element={
              <ProtectedRoute>
                <Pages.Welcome />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="*" element={<Pages.NotFound />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
