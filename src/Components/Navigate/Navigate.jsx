import "./Navigate.css";
import React from 'react'
import PropTypes from 'prop-types'; // Import PropTypes
import { IoMdSearch } from "react-icons/io";

const Navigate = ({ handleOpenClose, city, guests }) => {
  return (
    <header className="nav-app">
      <div className="logo">
        <img src="./src/assets/logo.svg" alt="winbnb-logo" />
      </div>

      <div>
        <div className="bar-container">
          <button className="left bar input" onClick={handleOpenClose}>
            {city}, Finland
          </button>

          <button className="bar input" onClick={handleOpenClose}>
            <p className="guests">
              {guests ? ` ${guests} guests` : "Add guests"}
            </p>
          </button>
          <button className="bar btn" onClick={handleOpenClose}>
            <IoMdSearch style={{ fontSize: 22, color: "#EB5757" }} />
          </button>
        </div>
      </div>
    </header>
  );
};

// Add PropTypes validation for your props
Navigate.propTypes = {
  handleOpenClose: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  guests: PropTypes.number
};

export default Navigate;
