import React from "react";
import { Routes, Route } from "react-router-dom";

import * as Pages from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pages.Login />}></Route>
        <Route path="/register" element={<Pages.Register />}></Route>
        <Route path="/home" element={<Pages.Home />}></Route>
        <Route path="*" element={<Pages.NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
