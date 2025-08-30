import './App.css';
import HomePage from './components/HomePage';
import {HashRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
