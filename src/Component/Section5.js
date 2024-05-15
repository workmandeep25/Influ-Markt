import React from "react";
import "./Section5.css";

// import Sec5slide1 from "./images/Slide1.jpg";
// import Sec5slide2 from "./images/Slide4.jpg";
// import Sec5slide3 from "./images/Slide5.jpg";
// import Sec5slide4 from "./images/Slide6.jpg";
// import Sec5slide5 from "./images/Slide7.jpg";
import Sec5Logo1 from "./images/instagram.svg";
import Sec5Logo2 from "./images/youtube.svg";

export const Section5 = () => {
  return (
    <div className="Sec5-Body">
      <div className="Top-Creator">Top Creator</div>
      <div className="Sec5-Slides-Menu">
        <div id="Sec5-Slides1" className="Sec5-Slides">
          <div className="Sec5-Slides-Name">Atul Kasbekar</div>
          <div className="Sec5-Insta-Youtube">
            <img
              className="Sec5-INsta-Logo"
              src={Sec5Logo1}
              alt="Sec5-Insta-Logo"
            ></img>
            <div className="Sec5-Insta-Followers">1.2m</div>
            <img
              className="Sec5-Youtube-Logo"
              src={Sec5Logo2}
              alt="Sec5-Youtube-Logo"
            ></img>
            <div className="Sec5-Youtube-Followers">53.3k</div>
          </div>
        </div>

        <div id="Sec5-Slides2" className="Sec5-Slides">
          <div className="Sec5-Slides-Name">Shivesh Bhatiya</div>
          <div className="Sec5-Insta-Youtube">
            <img
              className="Sec5-INsta-Logo"
              src={Sec5Logo1}
              alt="Sec5-Insta-Logo"
            ></img>
            <div className="Sec5-Insta-Followers">1.2m</div>
            <img
              className="Sec5-Youtube-Logo"
              src={Sec5Logo2}
              alt="Sec5-Youtube-Logo"
            ></img>
            <div className="Sec5-Youtube-Followers">53.3k</div>
          </div>
        </div>

        <div id="Sec5-Slides3" className="Sec5-Slides">
          <div className="Sec5-Slides-Name">Aman Dharatwal</div>
          <div className="Sec5-Insta-Youtube">
            <img
              className="Sec5-INsta-Logo"
              src={Sec5Logo1}
              alt="Sec5-Insta-Logo"
            ></img>
            <div className="Sec5-Insta-Followers">1.2m</div>
            <img
              className="Sec5-Youtube-Logo"
              src={Sec5Logo2}
              alt="Sec5-Youtube-Logo"
            ></img>
            <div className="Sec5-Youtube-Followers">53.3k</div>
          </div>
        </div>

        <div id="Sec5-Slides4" className="Sec5-Slides">
          <div className="Sec5-Slides-Name">Mrunal Panchal</div>
          <div className="Sec5-Insta-Youtube">
            <img
              className="Sec5-INsta-Logo"
              src={Sec5Logo1}
              alt="Sec5-Insta-Logo"
            ></img>
            <div className="Sec5-Insta-Followers">1.2m</div>
            <img
              className="Sec5-Youtube-Logo"
              src={Sec5Logo2}
              alt="Sec5-Youtube-Logo"
            ></img>
            <div className="Sec5-Youtube-Followers">53.3k</div>
          </div>
        </div>

        <div id="Sec5-Slides5" className="Sec5-Slides">
          <div className="Sec5-Slides-Name">Rizwan Bachav</div>
          <div className="Sec5-Insta-Youtube">
            <img
              className="Sec5-INsta-Logo"
              src={Sec5Logo1}
              alt="Sec5-Insta-Logo"
            ></img>
            <div className="Sec5-Insta-Followers">1.2m</div>
            <img
              className="Sec5-Youtube-Logo"
              src={Sec5Logo2}
              alt="Sec5-Youtube-Logo"
            ></img>
            <div className="Sec5-Youtube-Followers">53.3k</div>
          </div>
        </div>
      </div>
    </div>
  );
};
