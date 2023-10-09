import React, { useEffect, useState } from "react";
import "./App.css";
import Section from "./Components/Section/Section";
import TableCard from "./Components/TableCard/TableCard";
import Footer from "./Components/Footer/Footer";
import Navigate from "./Components/Navigate/Navigate";
import Stays from "./Components/Stays/Stays";
import "./index.css";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div className="app-container">
      <Navigate />
      <Section>
        <TableCard />
        <Stays data={data} />
      </Section>
      <Footer />
    </div>
  );
}

export default App;
