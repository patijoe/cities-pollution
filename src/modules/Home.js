import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Filter from "./Filter";

export default function Home(props) {
  const { citiesList } = props;
  const [cities, setCities] = useState([]);
  const [filteredName, setFilteredName] = useState("");
  const [optionSelected, setOptionSelected] = useState("pollution_ascendent");

  const setTopTenCities = useCallback((unfilteredCities) => {
    const filteredCities = unfilteredCities.filter((item) =>
      item.name.toUpperCase().includes(filteredName.toUpperCase())
    );

    const topTenCities = truncateArray(filteredCities, 10);

    setCities(topTenCities);
  }, [filteredName]);

  const getDescendetOrderedCities = useCallback(() => {
    const sortedCitiesList =
      citiesList && citiesList.sort((a, b) => b.level - a.level);

    setTopTenCities(sortedCitiesList);
    return sortedCitiesList;
  }, [citiesList, setTopTenCities]);

  const getAscendetOrderedCities = useCallback(() => {
    const sortedCitiesList =
      citiesList && citiesList.sort((a, b) => a.level - b.level);

    setTopTenCities(sortedCitiesList);
    return sortedCitiesList;
  }, [citiesList, setTopTenCities]);

  useEffect(() => {
    console.log(citiesList)
    if (optionSelected === "pollution_ascendent") {
      setCities(truncateArray(getAscendetOrderedCities(), 10));
    } else {
      setCities(truncateArray(getDescendetOrderedCities(), 10));
    }
  }, [citiesList, optionSelected, getAscendetOrderedCities, getDescendetOrderedCities]);

  const handleFilterName = (event) => {
    const inputValue = event.currentTarget.value;
    setFilteredName(inputValue);
  };

  const handleSelect = (event) => {
    setOptionSelected(event.target.value);

    event.target.value === "pollution_ascendent"
      ? getAscendetOrderedCities()
      : getDescendetOrderedCities();
  };

  const truncateArray = (arr, length) => {
    return arr && arr.slice(0, length);
  };

  return (
    <HomeSection>
      <HomeTitle>Como estan nuestras ciudades de contaminadas?</HomeTitle>
      <Filter handleFilterName={handleFilterName} />
      <select name="sort" onChange={handleSelect}>
        <option value="pollution_ascendent">
          Menor a mayor contamincación
        </option>
        <option value="pollution_descendent">
          Mayor a menor contamincación
        </option>
      </select>
      <CitiesListContainer>
        {cities &&
          cities.map((city) => {
            return (
              <CityContainer key={city.id}>
                <p>{city.name}</p>
                <p>{city.level}</p>
              </CityContainer>
            );
          })}
      </CitiesListContainer>
    </HomeSection>
  );
}

const HomeSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CitiesListContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1000px;
`;

const HomeTitle = styled.h1`
  color: grey;
`;

const CityContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(grey, 0.3);
  border: 1px solid grey;
  width: 300px;
  margin: 10px;
`;
