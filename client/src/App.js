import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/header/header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="*" element={<>Error</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
