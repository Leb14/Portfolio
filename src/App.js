import './App.css';
import Navbar from './Component/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Home />
          <About/>
          </div>
      </Router>
    </div>
  );
}

export default App;
