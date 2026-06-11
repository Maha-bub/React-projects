import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './Home';
import Aboute from './Aboute';
import Contact from './Contact';
import Services from './Services';





export default function App() {
  return (
    // <BrowserRouter>
    //   {/* Navigation */}
    //   <nav>
    //     <Link to="/">Home</Link> |{" "}
    //     <Link to="/about">About</Link> |{" "}
    //     <Link to="/contact">Contact</Link>
    //   </nav>

    //   {/* Routes */}
    //   <Routes>
    //     <Route path="/" element={<Home/>} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </BrowserRouter>

    <BrowserRouter>
    <nav>
      <Link to="/home">Home</Link>|{" "}
      <Link to="/aboute">Aboute</Link>|{" "}
      <Link to="/contact">Contact</Link>|{" "}
      <Link to="services">Services</Link>    
    </nav>

    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/aboute" element={<Aboute />} />
    <Route path="/contact" element={<Contact />}/>
    <Route path="/services" element={<Services />}/>

    </Routes>
    
    
    </BrowserRouter>
  )
}
