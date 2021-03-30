import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

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

  const getBorderColor = (levelPollution, opacity) => {
    if (levelPollution >= 0 && levelPollution <= 3) {
      return `rgba(134, 226, 213, ${opacity})`;
    } else if (levelPollution > 3 && levelPollution <= 6) {
      return `rgba(250, 190, 88, ${opacity})`;
    }
    return `rgba(217, 30, 24, ${opacity})`;
  };

  const legend = [
    {
      color: "rgba(134, 226, 213, 0.3)",
      text: "Nivel bajo de contaminación",
    },
    {
      color: "rgba(250, 190, 88,  0.3)",
      text: "Nivel medio de contaminación",
    },
    {
      color: "rgba(217, 30, 24, 0.3)",
      text: "Nivel alto de contaminación",
    },
  ];

  return (
    <HomeSection>
      <HomeTitle>Como estan nuestras ciudades de contaminadas?</HomeTitle>
      <ActionsContainer>
        <Filter handleFilterName={handleFilterName} />
        <Order handleSelect={handleSelect} />
      </ActionsContainer>
      <LeyendContainer>
        {legend.map((item) => {
          return (
            <LeyendItem>
              <ColorBox colorbox={item.color} />
              <LegendText>{item.text}</LegendText>
            </LeyendItem>
          );
        })}
      </LeyendContainer>
      <HorizontalRow />
      <CitiesListContainer>
        {cities &&
          cities.map((city) => {
            return (
              <CityContainer
                key={city.id}
                to={`/${city.id}`}
                level={city.level}
                bordercolor={getBorderColor(city.level, 1)}
                backgroundcolor={getBorderColor(city.level, 0.2)}
              >
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
  margin: 10px;
`;

const CitiesListContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
`;

const HomeTitle = styled.h1`
  color: grey;
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CityContainer = styled(Link)`
  background-color: ${(props) => props.backgroundcolor};
  border-radius: 5px;
  border: 2px solid ${(props) => props.bordercolor};
  display: flex;
  justify-content: space-between;
  margin: 10px;
  text-decoration: none;
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

const LeyendContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeyendItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-right: 20px;
  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }
`;

const ColorBox = styled.div`
  background-color: ${(props) => props.colorbox};
  width: 20px;
  margin-right: 15px;
  height: 20px;
`;

const LegendText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: grey;
  margin: 0;
`;

const HorizontalRow = styled.div`
  border-top: 1px solid grey;
  height: 1px;
  width: 80%;
  margin-bottom: 30px;
`;
