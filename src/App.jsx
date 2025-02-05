import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/index'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isOpen={isOpen} toggle={toggle}/>} />
      </Routes>
    </Router>
  );
}

export default App;
