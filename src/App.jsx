import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home";
//git push -u origin main
function App() {
  return (
    <div className="App bg-cbg ">
      <div className="max-w-screen-xl m-auto px-4">
        <Home />
      </div>
    </div>
  );
}

export default App;
