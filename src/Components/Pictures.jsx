import React, { useState } from 'react'
import './Pictures.css'
function Pictures(card) {

    const state = card.superHost;
    const stateBed = card.beds;
    let maxGuests = card.maxGuests;

    return (
        <div className='card'>
            <div className='img'>
                <img src={card.photo} className='picture' alt="image"></img>
            </div>
            <div className='superhost'>
                {state && (<span className='host'>SUPERHOST</span>)}

                <span className='beds'>
                    {card.type} {stateBed == null ? "" : `.${card.beds} beds`}
                </span>

                <div className='star'>
                    <span className='material-symbols-outlined align-middle' style={{ color: "rgb(235,87,87)" }}>
                        star
                    </span>
                    <span className='rating'>{card.rating}</span>
                </div>
            </div>
            <div>
                <p className='title'>{card.title}</p>
            </div>
        </div>
    )
}

export default Pictures