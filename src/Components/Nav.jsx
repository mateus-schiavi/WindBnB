import React from 'react'

export default function Nav(props) {
  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    props.onCityChange(selectedCity); // Chama a função para atualizar a cidade selecionada
  };

  return (
    <>
      <div>
        <nav className='navigation-bar'>
          <div className='navigation-container'>
            <a className='navigation-logo' id='navigation-1' href="#">
              WindBnB
            </a>
            <form className="navigation-flex" role='search' onSubmit={props.fn}>
              <select
                className='navigation-control' // Estilize conforme necessário
                onChange={handleCityChange} // Manipulador de eventos para seleção de cidade
              >
                <option value="">All Cities</option> {/* Opção para mostrar todos */}
                <option value="Helsinki">Helsinki</option>
                <option value="Turku">Turku</option>
                <option value="Vaasa">Vaasa</option>
                <option value="Oulu">Oulu</option>
              </select>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}
