import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './NavBar';
import Home from './components/Home';
import About from './components/About';
import Team from "./components/Team";
import Join_Us from "./components/Join_Us";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/join" element={<Join_Us />} />
        </Routes>
      </div>
    </Router>
  );
}
