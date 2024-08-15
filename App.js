import React from "react";
// import ReactDOM from "react-dom/client";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import Login from "./kanbanBoard/Login.js";
import HomePage from "./kanbanBoard/Homepage.js";
import NoPage from "./kanbanBoard/NoPage.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
