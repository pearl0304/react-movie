import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Detail } from "./routes/Detail";
import { Home } from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
