import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-100 to-amber-200">
      <Routes>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  </Router>
);
