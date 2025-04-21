import './App.css';
import HomePage from './components/HomePage';
import ImageUploader from './components/ImageUploader';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main style={{ paddingTop: "80px" }}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/basil"  element={<ImageUploader category="basil" />} />
            <Route path="/churu" element={<ImageUploader category="churu"/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
