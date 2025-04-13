import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Support from "./pages/Support";
import Education from "./pages/Education";
import Chatbot from "./pages/Chatbot";

function App() {
  return (
    <Router>
      <div className="bg-misty min-h-screen">
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/education" element={<Education />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route
              path="/"
              element={
                <div>
                  <h2 className="text-xl font-medium text-raisin">
                    Welcome to Pink Project 💗
                  </h2>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
