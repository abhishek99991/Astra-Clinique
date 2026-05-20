import './App.css';
import Header from './Reusable-Components/Header';
import Footer from './Reusable-Components/Footer';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import About from "../src/Components/About"
import Contact from "../src/Components/Contact"
import Services from "../src/Components/Services"


function App() {
  return (
    <div className="App">
       <Header />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
       <Footer />
    </div>
  );
}

export default App;
