import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Support from "./pages/Support";
import Education from "./pages/Education";
import Chatbot from "./pages/Chatbot";
import Statue from "./components/Statue";
import SelfExam from "./pages/SelfExam";
import EarlySigns from "./pages/EarlySigns";
import RiskFactors from "./pages/RiskFactors";
import TreatmentOptions from "./pages/TreatmentOptions";
import SupportLovedOne from "./pages/SupportLovedOne";
import BreastMyths from "./pages/BreastMyths";

function App() {
  return (
    <Router>
      <div className="bg-misty h-full">
        <Navbar />
        <div className="pt-24 px-6">
          <Routes>
            <Route path="/" element={<Statue />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/education" element={<Education />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/education/self-exam" element={<SelfExam />} />
            <Route path="/education/early-signs" element={<EarlySigns />} />
            <Route path="/education/risk-factors" element={<RiskFactors />} />
            <Route
              path="/education/treatment-options"
              element={<TreatmentOptions />}
            />
            <Route
              path="/education/support-loved-one"
              element={<SupportLovedOne />}
            />
            <Route path="/education/breast-myths" element={<BreastMyths />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
