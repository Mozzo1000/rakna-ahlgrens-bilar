import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import CountOriginalPage from './pages/CountOriginalPage';

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" idnex element={<HomePage/>} />
            <Route path="/count" element={<CountOriginalPage/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
