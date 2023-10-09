import React from 'react'

export default function Table(props) {
    return (
        <>
            <div className='image-container'>
                <img src={props.link} alt="windbnb image" />
            </div>

            <div className='txt-container'>
                <div className='upper'>
                    {props.super == true ? <div className='super'>SUPERHOST</div> : ""}

                    <div className='kind'>{props.type}.</div>
                    <div className='beds'>
                        <span>{props.beds == null ? "" : `${props.beds} beds`}</span>
                    </div>

                    <div className='rating'>
                        <span className='material-symbols-outlined star'>star</span>
                        {props.rating}
                    </div>
                </div>
                <div className='strong-text'>
                    <h5>
                        <strong>
                            {props.title}
                        </strong>
                    </h5>
                </div>
            </div>
        </>

    )
}
