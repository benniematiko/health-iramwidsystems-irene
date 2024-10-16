import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcomeContainer">

        <div className="welcomeTitle">
          <p>Welcome To IramsWids Systems</p>
          <h1>Consult with our best Doctor for proper Treatment</h1>
        </div>


        <div className="welcomeSections">
          <div className="welcomeLeft">
          <img src="./farmlandone.jpg" alt="" />
        </div>

        <div className="welcomeRight">
          <div className="welcomeCards">
            {/* <div className="welcomePhoto">
             
            </div> */}
            <div className="welcomeNotes">
              <div className="welcomeNotesTitle">
                <h1>We always Ensure best Medical treatment for your Health</h1>
              </div>

              <div className="welcomeNotesExpound">
                <p>
                  Iramwids always help to provide proper treatment for most of
                  get the proper cure and healty life which is the cooperate
                  focus thing for us patient our main proprity services
                </p>

                <p>
                  Iramwids always help to provide proper treatment for most of
                  get the proper cure and healty life which cooperate
                </p>
              </div>

              <div>
                <button className="welcomeBtn">Learn more</button>
              </div>
            </div>
          </div>
        </div>
        </div>


      </div>
    </div>
  );
};

export default Welcome;
