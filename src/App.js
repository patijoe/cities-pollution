import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function App() {
  const [citiesList, setCitiesList] = useState("");

  useEffect(() => getCities(), []);

  const getCities = () => {
    fetch("http://localhost:9000/cities")
      .then((response) => response.json())
      .then((response) => setCitiesList(response));
  };

  return (
    <AppSection>
      {citiesList &&
        citiesList.map((city) => {
          return (
            <div key={city.id}>
              <p>{city.id}</p>
              <p>{city.name}</p>
            </div>
          );
        })}
    </AppSection>
  );
}

const AppSection = styled.div`
  text-align: center;
  color: red;
`;
