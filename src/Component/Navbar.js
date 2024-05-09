import React from "react";
import "./Navbar.css";
import MainLogo from "./images/MainLogo.png";
import Banner from "./images/1_TGM_Blog_Banner_Influencer_Marketing.png"

export const Navbar = () => {
  return (
    <div>
      <div className="Navbar">
        <img className="Logo-Img" src={MainLogo} alt="MainLogo.png"></img>
        <div className="Navbar-Menu">
          <div className="Navbar-Menu-Items">I'm a Creator</div>
          <div className="Navbar-Menu-Items">Top Influencer</div>
          <div className="Navbar-Menu-Items">About Us</div>
          <div className="Navbar-Menu-Items">Contact Us</div>
        </div>
        <div className="Navbar-Button">
          <button id="Nav-chat">Chat With Us</button>
        </div>
      </div>
      <img className="Banner-Img" src={Banner} alt="Front-Banner"></img>

    </div>
  );
};
