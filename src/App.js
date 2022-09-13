import Canvas from "./components/Canvas";
import React from "react";
import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";

function App() {
  return (
    <div className="vh-100 bg-dark">
      <TopBar />
      <Routes>
        <Route path="" element={<Canvas />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
