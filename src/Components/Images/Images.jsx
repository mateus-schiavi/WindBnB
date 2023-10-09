import React from 'react';
import PropTypes from 'prop-types'; // Importe PropTypes
import './Images.css'
import { LiaStarSolid } from "react-icons/lia";

const Images = ({ beds, photo, rating, superHost, title, type }) => {
  return (
    <article>
      <div className="container">
        <img
          src={photo}
          alt={title}
          style={{ width: "100%", height: "100%", borderRadius: "12px" }}
        />
      </div>
      <div className="information">
        <div className="superhost-div">
          {superHost ? <span className="superhost">SUPERHOST</span> : " "}
          <span className="type">
            {type}. {beds} {beds === 0 || beds === 1 ? "bed" : "beds"}
          </span>
        </div>

        <div className="rating">
          <LiaStarSolid
            style={{
              display: "inline-flex",
              marginRight: "12px",
              color: "#eb5757",
            }}
          />
          <span className="ranking">{rating}</span>
        </div>
      </div>
      <div style={{ fontWeight: 600, color: "#333333" }}>{title}</div>
    </article>
  );
};

// Adicione a validação de prop usando PropTypes
Images.propTypes = {
  beds: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  superHost: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Images;
