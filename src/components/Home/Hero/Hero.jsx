import "./Hero.css";

import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroContainer">
        <div className="heroContent">
          <h4>For Better Healthcare</h4>
          <h1>Quality Healthcare Solution for all</h1>
          <p>
            Iramswids Systems alwaysdiv help to provide proper treatment for all of get
            the proper cure and healty life which is the most focus thing for us
          </p>

          <Link to="/services"><button className="heroBtn">Our Services</button></Link>

          <div>
            <div>Served number</div>
            <div>Delivered</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
