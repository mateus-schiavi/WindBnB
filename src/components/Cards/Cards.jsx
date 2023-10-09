import React from 'react'
import "./Cards.css"

function Cards(props) {
  const isSuper = props.superhost;

  return (
    <div className='cards'>
        <div className='div-img'>
            <img className='image' src={props.photo} alt={props.title} />
        </div>
        <div className='description'>
            <div className='host'>
            {isSuper === true ? <p className='superhost'>SUPERHOST</p> : ""}
            <h5>{props.type}. {props.beds} beds</h5>
            </div>
            <div className='rating-general'>
              <span>grade</span>
              <h4>{props.rating}</h4>
            </div>
        </div>
        <div>
            <h4 className='title'>{props.title}</h4>
        </div>
    </div>
  )
}

export default Cards