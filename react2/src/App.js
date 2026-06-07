import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Aboute from './pages/Aboute';
import Contact from './pages/Contact';
import Props from './pages/Props';
import Events from './pages/Events';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboute" element={<Aboute />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/props" element={<Props />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
