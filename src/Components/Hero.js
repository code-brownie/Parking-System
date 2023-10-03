import React, { useEffect, useState } from "react";
import Doctor from "../Assets/hero2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareParking, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/Signup");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <h2 className="text-title">
             Welcome to ParkNxt : Simplifying Urban Parking
          </h2>
          <p className="text-descritpion">
            Discover a smarter, hassle-free way to navigate urban mobility with our innovative smart parking solution. 
            Say goodbye to parking headaches and hello to convenience, efficiency, and a cleaner, safer city. Explore ParkNxt now.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
           <FontAwesomeIcon icon={faSquareParking} /> Park now
          </button>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
