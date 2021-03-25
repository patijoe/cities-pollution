import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [citiesList, setCitiesList] = useState("");

  useEffect(() => getCities(), []);

  const getCities = () => {
    fetch("http://localhost:9000/cities")
      .then((response) => response.json())
      .then((response) => setCitiesList(response));
  };

  return (
    <div className="App">
      {citiesList &&
        citiesList.map((city) => {
          return (
            <div key={city.id}>
              <p>{city.id}</p>
              <p>{city.name}</p>
            </div>
          );
        })}
    </div>
  );
}
