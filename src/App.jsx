import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import Skill from "./pages/Skill";
import Jobs from "./pages/Jobs";
import Training from "./pages/Training";

function App() {
  return (
    <Router>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/training" element={<Training />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
