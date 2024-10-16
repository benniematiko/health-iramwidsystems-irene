
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import Appointment from "./pages/Appointment/Appointment";
import Home from "./pages/Home/Home";


const App = () => {
  return (
    <div className="app">        
      <Router> 
        <Navbar />         
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Services" element={<Services />} /> 
          <Route path="/Appointment" element={<Appointment />} />

          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>

        <Footer />
        
      </Router>
    </div>
  );
};

export default App;
