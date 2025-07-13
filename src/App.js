import './App.css';
import HomePage from './components/HomePage';
import {HashRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <main style={{ paddingTop: "80px" }}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            {/* <Route path="/basil"  element={<ImageUploader category="basil" />} />
            <Route path="/churu" element={<ImageUploader category="churu"/>}/> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
