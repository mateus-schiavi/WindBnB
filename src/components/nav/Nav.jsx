import React from "react";
import "./Nav.css"

function Nav({ onFilter, city, maxGuests, setCity, setMaxGuests }) {
    const handleFilterClick = () => {
        onFilter(city, maxGuests);
    };

    return (
        <nav className='nav-base'>
            <div className='logo'>
                <img src="src\img\logo.svg" alt="Logo" />
            </div>
            <div className='search'>
                <input className="input-1"
                    type="text"
                    placeholder="Whole, Finland"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <input className="input-2"
                    type="number"
                    placeholder="Add guests"
                    value={maxGuests}
                    onChange={(e) => setMaxGuests(e.target.value)}
                />

                <span id='search-icon' className="material-symbols-outlined" onClick={handleFilterClick}>search</span>


            </div>
        </nav>
    );
}

export default Nav;