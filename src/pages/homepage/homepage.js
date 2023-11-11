import React from "react";
import "./homepage.css";
import dika from "../../images/dika.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div>
        <img className="dika" src={dika} alt="" />
      </div>
      <div className="title-slogan-container">
        <div className="title">BITS Bids</div>
        <div className="slogan">find it, bid it, own it</div>
      </div>
      <div className="buttonsContainer">
      <Link to="/market">
          <button className="marketButton">Market</button>
        </Link>
        <Link to="/yourbids">
        <button className="yourbidsbutton">Your Bids</button>
        </Link>
        <Link to="/chat">
        <button className="chatbutton">Chat</button>
      </Link>
      </div>
      
    </>
  );
}

export default Homepage;
