import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/header/header";
import Home from "./pages/home/home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<>Error</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
