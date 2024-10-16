import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="topNavbar">

        <div className="topNavbarContainer">

          <div className="topNavbarMob">
            <p>+254 725 531 497 </p>
            <p>|</p>
            <p>+254 725 531 497 </p>
            <p>|</p>
            <p>info@iramwids.com</p>
          </div> 

          <div className="topNavbarSocials">
            <p>Monday - Saturday | 24 / 7  </p>             
          </div>         
        </div>
      </div>

      <div className="middleNavbar">

        <div className="navbarMiddleContainer">

          <div className="leftSide">
            <Link to={"/"}>Iramwids Systems</Link>
          </div>
          <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>            
            <Link to="/appointment" className="appointment">
              Appointment
            </Link>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
