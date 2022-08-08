import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";



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
