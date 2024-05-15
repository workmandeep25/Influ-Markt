import React from "react";
import "./Section4.css";

import Sec4Logo1 from "./images/Smart1.svg";
import Sec4Logo2 from "./images/Smart2.svg";
import Sec4Logo3 from "./images/Smart3.svg";
import Sec4Logo4 from "./images/Smart4.svg";
import Sec4Logo5 from "./images/Smart5.svg";

export const Section4 = () => {
  return (
    <div className="Sec4-Body">

      <div className="Smart-Tools">Smart Tools</div>

      <div className="Sec4-Menu">

        <div className="Sec4-Menu-Boxes">
          <img className="Sec4-Logo" src={Sec4Logo1} alt="Sec4Logo1"></img>
          <div className="Sec4-Heading">Creator Insights</div>
          <div className="Sec4-text">Get Insights Of Any Influencer Profile Inside Seconds Straight From Your Browser</div>
        </div>

        <div className="Sec4-Menu-Boxes">
          <img className="Sec4-Logo" src={Sec4Logo2} alt="Sec4Logo2"></img>
          <div className="Sec4-Heading">Campaign Executive</div>
          <div className="Sec4-text">Automatic End-To-End Campaign Execution. Eliminates Inessential Back & Forth And Unnumberable Stand Out Sheets</div>
        </div>

        <div className="Sec4-Menu-Boxes">
          <img className="Sec4-Logo" src={Sec4Logo3} alt="Sec4Logo3"></img>
          <div className="Sec4-Heading">Market Research</div>
          <div className="Sec4-text">Enhance Your Business With Our New Age Research Solutions And Seize Opportunities By Acting Resolutely To Promote Modification Through Unjust Insights To Drive Extraordinary Growth</div>
        </div>

        <div className="Sec4-Menu-Boxes">
          <img className="Sec4-Logo" src={Sec4Logo4} alt="Sec4Logo4"></img>
          <div className="Sec4-Heading">Leaderboard</div>
          <div className="Sec4-text">Perceive Insights And Information Of Quite Thousands Of Publishers Across The Social Media Platforms</div>
        </div>

        <div className="Sec4-Menu-Boxes">
          <img className="Sec4-Logo" src={Sec4Logo5} alt="Sec4Logo5"></img>
          <div className="Sec4-Heading">Brand Quality & Intelligence</div>
          <div className="Sec4-text">Video Promoting With AI-Powered Insights Provides Valuable Digital Video Insights That Helps Your Brand To Make And Run Booming Campaigns</div>
        </div>
      </div>
    </div>
  );
};
