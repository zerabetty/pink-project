import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Support from "./pages/Support";
import Education from "./pages/Education";
import Chatbot from "./pages/Chatbot";
import Statue from "./components/Statue";

function App() {
  return (
    <Router>
      <div className="bg-misty min-h-screen">
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Statue />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/education" element={<Education />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
