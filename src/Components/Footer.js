import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              Parknxt <span className="ft-sign"></span>
            </p>
            <p className="ft-description">
            Experience Stress-Free Parking Solutions with Parknxt: Your Key to Convenient, Smart, and Real-Time Street Parking Management.
            </p>
          </div>
        </div>
        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a>team.morph.group@gmail.com</a>
            </li>
            <li>
              <a>
                Parknxtsmartparking@gmail.com
              </a>
            </li>
            <li>
              <a>+91-8957600166</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© All rights reserved.</p> 
      </div>
    </div>
  );
}
export default Footer;