import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
//git push -u origin main
function App() {
  return (
    <div className="App bg-cbg ">
      <div className="max-w-screen-xl m-auto px-4">
        {/* Page Navigations */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
