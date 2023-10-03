import React from "react";
import Doctor from "../Assets/car1.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        At ParkNxt, we are dedicated to transforming the urban mobility landscape. Our mission is to simplify parking, reduce congestion,
        and contribute to a cleaner, more accessible world. We believe that technology can revolutionize the way we park,
        making it more convenient and eco-friendly for everyone.
        </p>

        <h4 className="about-text-title">Why Choose ParkNxt?</h4>

        <SolutionStep
          title="User-Centric Approach:"
          description="We put users first, designing our platform to be intuitive and user-friendly. Your convenience is our priority."
        />

        <SolutionStep
          title="Real-Time Data"
          description="ParkNxt leverages real-time data to ensure accurate parking availability information, reducing the frustration of searching for parking."
        />

        <SolutionStep
          title="Environmental Responsibility"
          description="We're passionate about environmental sustainability. By reducing traffic congestion, we're doing our part to create cleaner, greener cities."
        />

<SolutionStep
          title="Local Partnerships"
          description="We collaborate with local businesses and parking space providers to create a network of accessible parking options."
        />
      </div>
    </div>
  );
}

export default About;
