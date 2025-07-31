import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Lens from "./pages/Lens";
import TMS from "./pages/TMS";
import Sentinel from "./pages/Sentinel";
import Extension from "./pages/Extension";
import SpotterApp from "./pages/SpotterApp";
import LoanCalculators from "./pages/LoanCalculators";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lens" element={<Lens />} />
        <Route path="/tms" element={<TMS />} />
        <Route path="/sentinel" element={<Sentinel />} />
        <Route path="/extension" element={<Extension />} />
        <Route path="/spotter-app" element={<SpotterApp />} />
        <Route path="/loan-calculators" element={<LoanCalculators />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
