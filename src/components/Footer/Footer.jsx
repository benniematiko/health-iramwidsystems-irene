import "./Footer.css";


import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">

        <div className="footerContentMain">

        <div className="footerLogo">
          <div>
            <img src="./logo.jpg" alt="" className="logo" />
          </div>

          <div>
            <p>
              Iramswids Systems always try to provide the most common of get the
              proper are for cure Healthcare Treatment
            </p>
          </div>

          <div>
            facebook | youtube | instagram
          </div>
        </div>

        <div className="company">
          <div>
            <h1>Company</h1>
          </div>
          <div>
            <ul className="footerLinks">
              <Link to="/home"> About Us </Link>
              <Link to="/services" >Our Services</Link>
              <Link to="/products" >Our Products</Link>
              <Link>Doctor</Link>
              <Link>Blog Post</Link>
              <Link>Our Team</Link>
              <Link>Contact us</Link>
            </ul>
          </div>
        </div>

        <div className="informatiom">
          <div>
            <h1>Information</h1>
          </div>
          <div>
            <ul className="footerLinks">
              <Link to="/appointment"> Appointment </Link>
              <Link>Medical equipment</Link>
              <Link>Home based care</Link>
              <Link>Chronic disease</Link>
              <Link>Style guide</Link>
              <Link>Licenses</Link>
            </ul>
          </div>
        </div>

        <div className="contactInfo">
          <div>
            
            <h1>Contact Info</h1>
          </div>
          <div>
            <p>Outering Road, Passia</p>
            <p>Nairobi</p>
            <p>info@iramwids.com</p>
            <p>www.iramswidssystems.com</p>

            <p>+254 725 531 497</p>
            <p>+254 725 531 497</p>
          </div>
        </div>

        </div>

        <div className="footerCopyRight">
          <p>© 2022 Iramwids Systems. All rights reserved - Designed and developed by Ben Matiko</p>
        </div>


      </div>
    </div>
  );
};

export default Footer;
