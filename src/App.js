import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import MyService from "./Pages/MyService/MyService";



function App() {
  return (
    <div>
       <Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/skill" element={<Skills/>}/>
          <Route path="/service" element={<MyService/>}/>
        </Routes>
       </Navbar>
    </div>
  );
}

export default App;
