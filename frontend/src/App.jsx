/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lottie from "lottie-react";
import nightsky from "./lotties/night-sky.json";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import "./index.css";

{/* Common Layout for Main Pages */}
const Layout = ({ children }) => (
  <div>
    <Lottie className="bg" animationData={nightsky} loop={true} />
    <Lottie className="bgtwo" animationData={nightsky} loop={true} />
    <Lottie className="bgtemp" animationData={nightsky} loop={true} />
    <Nav />
      {children} 
    <Footer />
  </div>
);


function App() {
  return (
    <Router>
      <Routes>
        {/* Login & Register Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Main Pages */}
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        
      </Routes>
    </Router>
  );
}

export default App;
