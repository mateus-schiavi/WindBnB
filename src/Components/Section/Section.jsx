import React from 'react'
import PropTypes from 'prop-types';
import Images from '../Images/Images'
import './Section.css'

const Section = ({ stays }) => {
  // Check if stays is defined and is an array before mapping
  if (!stays || !Array.isArray(stays)) {
    return <div>No stays data available</div>;
  }

  return (
    <section className='grid'>
      {stays.map((e, i) => (
        <Images
          key={i}
          beds={e.beds}
          type={e.type}
          photo={e.photo}
          title={e.title}
          rating={e.rating}
          superHost={e.superHost}
        />
      ))}
    </section>
  );
};


Section.propTypes = {
  stays: PropTypes.arrayOf(
    PropTypes.shape({
      beds: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      superHost: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default Section;
