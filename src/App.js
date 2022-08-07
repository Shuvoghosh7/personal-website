import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import './App.css';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
        <Route path="/" element={<Home/>} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
