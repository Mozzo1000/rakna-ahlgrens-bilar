import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import CountOriginalPage from './pages/CountOriginalPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route element={<Navbar />}>
              <Route path="/" idnex element={<HomePage/>} />
            </Route>
          </Routes>
          <Routes>
            <Route path="/count/original" element={<CountOriginalPage/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
