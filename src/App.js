import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import MyService from "./Pages/MyService/MyService";


function App() {
 
  return (
    <div className="scroll-smooth">
       <Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
       
       </Navbar>
    </div>
  );
}

export default App;
