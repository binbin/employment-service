/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-06-07 13:05:53
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-06-07 13:27:49
 * @FilePath: /employment-service/src/App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import Skill from "./pages/Skill";
import Jobs from "./pages/Jobs";
import Training from "./pages/Training";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="main-container">
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/training" element={<Training />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
