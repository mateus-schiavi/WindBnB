import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Table from "./Components/Table";
import { element } from "prop-types";

function App() {
  const [data, setData] = useState([]);
  const [filterTable, setFilterTable] = useState([]);
  const [selectedCity, setSelectedCity] = useState(""); // Estado para armazenar a cidade selecionada

  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      setData(resJson);
      setFilterTable(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filterData = (text) => {
    const filteredData = data.filter(
      (element) =>
        element.maxGuests >= parseInt(text) &&
        (selectedCity === "" || element.city === selectedCity) // Aplicar filtro da cidade
    );

    const images = filteredData.map((element) => element.photo);

    return images;
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const txt = e.target[0].value;
    const filteredResult = filterData(txt);
    setFilterTable(filteredResult);
  };

  // Função para lidar com a seleção de cidade
  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return (
    <>
      <div className="container">
        {/* Passar a função handleCityChange para o componente Nav */}
        <Nav fn={handleFilter} onCityChange={handleCityChange}></Nav>
      </div>

      <main>
        {filterTable
          .filter((element) => selectedCity === "" || element.city === selectedCity)
          .map((el, i) => (
            <div key={i} className="ticket">
              <Table
                link={el.photo}
                title={el.title}
                kind={el.type}
                beds={el.beds}
                super={el.superHost}
                rating={el.rating}
              ></Table>
            </div>
          ))}
      </main>
    </>
  );
}

export default App;
