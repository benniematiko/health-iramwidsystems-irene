import "./Summary.css";

const Summary = () => {
  return (
    <div className="summary">
      <div className="summaryContainer">
        <div className="emergency">
          Emergency Services
          <p>24/7 Emergency service</p>
        </div>

        <div className="bar"></div>
        <div className="qualified">
          Qualified health staff
          <p>Best Doctors Collection</p>
        </div>
        <div className="bar"></div>
        <div className="online">
          Online Report
          <p>We mail your Report</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
