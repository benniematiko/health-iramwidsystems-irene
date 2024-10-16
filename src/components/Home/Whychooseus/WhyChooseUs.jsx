import "./WhyChooseUs.css"

const WhyChooseUs = () => {
  return (
    <div className="whyChooseUs">

     <div className="whyChooseUsContainer">

      <div className="whyChooseUsTitle">
        <p>Why Choose Us</p>
        <h1>Complete Healthcare Solution for our valuable Patients</h1>
      </div>

      <div className="whyChooseUsContents">

        <div className="whyUsContentLeft">

          <div className="modernInstrument">            
            <div className="modernPhoto">
              <img src="./farmlandone.jpg" alt=""  className="modernImage"/>
            </div>
            <div className="moderntext">
              <div><h4>Modern Instrument</h4></div>
              <p>Diagnosy always try to provide the most common of get the 
                proper issuer for cure Healthcare</p>
            </div>
          </div>

          <div className="easyBilling">            
            <div className="easyBillingPhoto">
            <img src="./farmlandone.jpg" alt=""  className="modernImage"/>
            </div>
            <div className="easyBillingtext">
              <div><h4>Easy Billing System</h4></div>
              <p>Diagnosy always try to provide the 
                Billing system of get the proper very simple and easy</p>
            </div>
          </div>


          <div className="qualifiedStaff">            
            <div className="qualifiedStaffPhoto">
            <img src="./farmlandone.jpg" alt=""  className="modernImage"/>
            </div>
            <div className="qualifiedStafftext">
              <div><h4>Qualified Nurses & Staff</h4></div>
              <p>Diagnosy always try to provide qualified Nurses & Stuff are get 
                the proper cure Healthcare</p>
            </div>
          </div>
         
        </div>
        <div className="whyUsContentRight">
          <img src="./farmlandone.jpg" alt="" className="dottedImage" />

          <div className="dotted">
          <img src="./dotted-shapes.svg" alt="" />
       

          </div>
         </div>

         

      </div>


     </div>
      
    </div>
  )
}

export default WhyChooseUs
