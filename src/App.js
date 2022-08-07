import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";

import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;