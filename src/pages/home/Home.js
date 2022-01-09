import React from "react";
import "./Home.css";
import consult from '../../assets/consultation.png'

const Home = () => {
  return (
    <div className="home">
      <div className="pg vertical">
      <div className="h-0">
        <div className="intro">
          <label>
            Automated Detection. Faster Diagnosis. Better Health Care.<br/>
            <span>Diagnosoft</span> is for you.
          </label>
          <p>
            Diagnosoft’s platform provides a smart detection system to help you
            provide faster and much more accurate patient diagnosis.
          </p>
        </div>
        <div className="hero" >
            <img src={consult} alt="consulation"/>
        </div>
      </div>
      <div className="h-0">
          {/* <div className="more">
              <div className="m-0">
                 <a href="#organizations"><button>learn more</button></a>
             </div>
          </div> */}
          <div className="scroll">
              <a href="#organization">Scroll for more</a>
              <i className="bi bi-chevron-double-down bounce"></i>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
