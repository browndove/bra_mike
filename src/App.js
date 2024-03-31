import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import About from './pages/AboutPage';
import Home from './pages/Home';


function App() {
  return (
    <Routes className="bg-white">
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;