import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/index.js'
import SotongGuide from './components/SotongGuide';
import GuidePage from './components/SotongGuide/GuidePage';

/*
  Work with emojis and gradients
  Change events page into cards
  make simple photo slideshow video
  Build sotong guide pages
  Build backend
*/

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  console.log(process.env)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isOpen={isOpen} toggle={toggle}/>} />
        <Route path="sotongGuide" element={<SotongGuide />} />
      </Routes>
    </Router>
  );
}

export default App;
