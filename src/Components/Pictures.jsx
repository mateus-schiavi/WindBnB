import React from 'react'
import './Pictures.css'
import { LiaStarSolid } from 'react-icons/lia'

const pictures = ({ beds, photo, rating, superHost, title, type }) => {
    return (
        <article>
            <div className='container'>
                <img src={photo} alt={title} style={{ width: "100%", height: "100%", borderRadius: "12px" }} />
            </div>
            <div className='information'>
                <div className='superhost'>
                    {superHost ? <span className='host'>SUPERHOST</span> : ""}
                    <span className='type'>
                        {type}. {beds} {beds == 0 || beds == 1 ? "bed" : "beds"}
                    </span>
                </div>
                <div className='rating'>
                    <LiaStarSolid
                        style={{ display: "inline-flex", marginRight: "12px", color: "#eb5757" }} />
                    <span className='ranking'>{rating}</span>
                </div>
            </div>
            <div style={{ fontWeight: "600", color: "#333333" }}>{title}</div>
        </article>
    );
};

export default pictures;