import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav"
import Cards from "./components/Cards/Cards"
import SubNav from "./components/subNav/subNav"
import React from "react";

function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
    getData();
  }, []);

  // Puedes ver la variable data en consola.
  console.log(data);

  // const para filtrar
  const [city, setCity] = useState("");
  const [maxGuests, setMaxGuests] = useState("");

  function filterStays(city, maxGuests) {
    // Filtrar os cards com base na cidade e no número máximo de convidados
    const filteredData = data.filter((stay) => {
      if (city && stay.city.toLowerCase() !== city.toLowerCase()) {
        return false;
      }
      if (maxGuests && stay.maxGuests && stay.maxGuests < parseInt(maxGuests)) {
        return false;
      }
      return true;
    });

    return filteredData;
  }

  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (city, maxGuests) => {
    const filtered = filterStays(city, maxGuests);
    setFilteredData(filtered);
  };

  return (
    <div className="deep-base">
      <div className="base">
        <Nav onFilter={(city, maxGuests) => handleFilter(city, maxGuests)} city={city} maxGuests={maxGuests} setCity={setCity} setMaxGuests={setMaxGuests} />
        <SubNav />

        {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
        <div className="deep-cards">
          {filteredData.length > 0
            ? filteredData.map((stay, index) => {
              return (
                <Cards
                  key={index}
                  photo={stay.photo}
                  superhost={stay.superHost}
                  type={stay.type}
                  beds={stay.beds}
                  title={stay.title}
                  rating={stay.rating}
                  maxGuests={stay.maxGuests}
                  city={stay.city}
                />
              );
            })
            : data.map((stay, index) => {
              return (
                <Cards
                  key={index}
                  photo={stay.photo}
                  superhost={stay.superHost}
                  type={stay.type}
                  beds={stay.beds}
                  title={stay.title}
                  rating={stay.rating}
                  maxGuests={stay.maxGuests}
                  city={stay.city}

                />

              );
            })}
        </div>

      </div>
    </div>
  );
}

export default App;