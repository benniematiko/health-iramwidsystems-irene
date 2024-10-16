import "./Ourservices.css";
import { Link } from "react-router-dom"

const Ourservices = () => {
  return (
    <div className="ourservices">
      <div className="ourServicesContainer">

        <div className="ourservicesTitle">
          <div><p>Our Services</p></div>
          <div className="ourservicesMain">
            <div>
              <h1>Different types of Department we have for your healthcare
                </h1>
              </div>
            <div className="linkServices">
             <Link to="/services"> View all</Link>
            </div>
          </div>
        </div>

        <div className="ourservicesCards">
          <div className="servicesLeft">
            <img src="./farmlandone.jpg" alt="" />
          </div>

          <div className="serviceRight">

            <div className="serviceRightTop">


              <div className="servicesItemCard" > 
                <img src="./farmlandone.jpg" alt="" className="servicesImageOne" />
                <div className="serviceTitle">
                  Chronic diseases
                </div> 
                <div className="serviceparagraph">
                  <p>Lorem ipsum dolor sit amet consectetur adipis laudantium unde velit modi fuga.</p>
                </div>
              </div>


              <div className="servicesItemCard">
              <img src="./farmlandone.jpg" alt=""  className="servicesImageTwo" />
              <div className="serviceTitle">
                  Mental Health Care
                </div>
                <div className="serviceparagraph">
                  <p>Lorem ipsum dolor sit amet consectetur adipis laudantium unde velit modi fuga.</p>
                </div>
              </div>
            </div>

            <div className="serviceRightBottom">
              <div className="servicesItemCard">
                <img src="./farmlandone.jpg" alt="" className="servicesImageOne" />
                <div className="serviceTitle">
                  Home Based Care
                </div>
                <div className="serviceparagraph">
                  <p>Lorem ipsum dolor sit amet consectetur adipis laudantium unde velit modi fuga.</p>
                </div>
              </div>
              
              <div className="servicesItemCard">
              <img src="./farmlandone.jpg" alt=""  className="servicesImageTwo" />
              <div className="serviceTitle">
                  Medical Equipment
                </div>
                <div className="serviceparagraph">
                  <p>Lorem ipsum dolor sit amet consectetur adipis laudantium unde velit modi fuga.</p>
                </div>
              </div>
            </div>

          </div>

        </div>


      </div>
    </div>
  );
};

export default Ourservices;
