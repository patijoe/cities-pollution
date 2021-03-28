import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Order from "./Order";

export default function Home(props) {
  const { citiesList } = props;
  const [cities, setCities] = useState([]);
  const [filteredName, setFilteredName] = useState("");
  const [optionSelected, setOptionSelected] = useState("pollution_ascendent");

  const setTopTenCities = useCallback(
    (unfilteredCities) => {
      const filteredCities = unfilteredCities.filter((item) =>
        item.name.toUpperCase().includes(filteredName.toUpperCase())
      );

      const topTenCities = truncateArray(filteredCities, 10);
      return topTenCities;
    },
    [filteredName]
  );
  console.log("cities", cities);

  const getDescendetOrderedCities = useCallback(() => {
    const sortedCitiesList =
      citiesList && citiesList.sort((a, b) => b.level - a.level);

    const orderedTenCities = setTopTenCities(sortedCitiesList);
    return orderedTenCities;
  }, [citiesList, setTopTenCities]);

  const getAscendetOrderedCities = useCallback(() => {
    const sortedCitiesList =
      citiesList && citiesList.sort((a, b) => a.level - b.level);

    const orderedTenCities = setTopTenCities(sortedCitiesList);
    return orderedTenCities;
  }, [citiesList, setTopTenCities]);

  useEffect(() => {
    if (optionSelected === "pollution_ascendent") {
      setCities(truncateArray(getAscendetOrderedCities(), 10));
    } else {
      setCities(truncateArray(getDescendetOrderedCities(), 10));
    }
  }, [
    citiesList,
    optionSelected,
    getAscendetOrderedCities,
    getDescendetOrderedCities,
  ]);

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
      <Order handleSelect={handleSelect} />
      <CitiesListContainer>
        {cities &&
          cities.map((city) => {
            return (
              <CityContainer key={city.id}>
                <CityDescription>
                  <CityTitle>{city.name}</CityTitle>
                  <p>{city.level}</p>
                </CityDescription>
                <CityImage imgUrl={city.image}></CityImage>
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
  justify-content: space-between;
  background-color: rgba(grey, 0.3);
  border: 1px solid grey;
  border-radius: 5px;
  margin: 10px;
  width: 300px;
`;

const CityDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const CityTitle = styled.h2`
  color: grey;
  margin: 0;
`;

const CityImage = styled.div`
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 110px;
  width: 110px;
`;
