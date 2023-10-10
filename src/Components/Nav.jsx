import React, { useState } from 'react'

export default function Nav(props) {

  const[isDialogOpen, setIsDialoOpen] = useState(false);
  const[numberOfGuests, setNumberOfGuest] = useState(0);

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    props.onCityChange(selectedCity);
  };

  const openDialog = () => {
    setIsDialoOpen(true);
  };

  const closeDialog = () => {
    setIsDialoOpen(false);
  };

  const updateNumberOfGuests = () => {
    props.onNumberOfGuestsChange(numberOfGuests);
  }

  return (
    <>
      <div>
        <nav className='navigation-bar'>
          <div className='navigation-container'>
            <img src="src\img\logo.svg" alt="" />
            <div>
              <form className="navigation-flex" role='search' onSubmit={props.fn}>
                <select
                  className='navigation-control'
                  onChange={handleCityChange}
                >
                  <option value="">Whole, Finland</option>
                  <option value="Helsinki">Helsinki</option>
                  <option value="Turku">Turku</option>
                  <option value="Vaasa">Vaasa</option>
                  <option value="Oulu">Oulu</option>
                </select>
                <input type="text" className='guests' placeholder='Add Guests'/>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
