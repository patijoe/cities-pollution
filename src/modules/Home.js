import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { truncateArray } from "../utils/helper";
import { legend } from "../utils/legend.values";

import Filter from "./Filter";
import Order from "./Order";
import Footer from "./Footer";

export default function Home(props) {
  const { citiesList } = props;
  const [cities, setCities] = useState([]);
  const [filteredName, setFilteredName] = useState("");
  const [optionSelected, setOptionSelected] = useState("pollution_ascendent");

  const getTopTenCities = useCallback(
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
      citiesList &&
      citiesList.sort((a, b) => b.levelPollution - a.levelPollution);

    const orderedTenCities = getTopTenCities(sortedCitiesList);
    return orderedTenCities;
  }, [citiesList, getTopTenCities]);

  const getAscendetOrderedCities = useCallback(() => {
    const sortedCitiesList =
      citiesList &&
      citiesList.sort((a, b) => a.levelPollution - b.levelPollution);

    const orderedTenCities = getTopTenCities(sortedCitiesList);
    return orderedTenCities;
  }, [citiesList, getTopTenCities]);

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

  const fillCardColor = (levelPollution, opacity) => {
    if (levelPollution >= 0 && levelPollution <= 3) {
      return `rgba(134, 226, 213, ${opacity})`;
    } else if (levelPollution > 3 && levelPollution <= 6) {
      return `rgba(250, 190, 88, ${opacity})`;
    }
    return `rgba(217, 30, 24, ${opacity})`;
  };

  const getPollutionLevelText = (levelPollution) => {
    if (levelPollution >= 0 && levelPollution <= 3) {
      return "BAJO";
    } else if (levelPollution > 3 && levelPollution <= 6) {
      return "MEDIO";
    }
    return "ALTO";
  };

  return (
    <HomeSection>
      <HomeTitle>Niveles de contaminación en ciudades europeas.</HomeTitle>
      <ActionsContainer>
        <Filter handleFilterName={handleFilterName} />
        <Order handleSelect={handleSelect} />
      </ActionsContainer>
      <LeyendContainer>
        {legend.map((item) => {
          return (
            <LeyendItem key={item.text}>
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
                level={city.levelPollution}
                bordercolor={fillCardColor(city.levelPollution, 1)}
                backgroundcolor={fillCardColor(city.levelPollution, 0.2)}
              >
                <CityDescription>
                  <CityTitle>{city.name}</CityTitle>
                  <CityPollutionLevel>
                    Nivel de contaminación:
                  </CityPollutionLevel>
                  <CityPollutionLevelText>
                    {getPollutionLevelText(city.levelPollution)}
                  </CityPollutionLevelText>
                </CityDescription>
                <CityImage imgUrl={city.image} />
              </CityContainer>
            );
          })}
      </CitiesListContainer>
      <Footer />
    </HomeSection>
  );
}

const HomeSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
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
  text-align: center;
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 20px 20px;
  width: 100%;

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

const CityPollutionLevel = styled.p`
  color: grey;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  margin: 10px 0 0;
`;

const CityPollutionLevelText = styled(CityPollutionLevel)`
  font-size: 13px;
  font-weight: bold;
  margin: 4px 0 0;
  text-align: right;
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
  border: 1px solid grey;
  border-radius: 5px;
  flex-direction: column;
  padding: 5px;
  margin: 10px 0 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeyendItem = styled.div`
  align-items: center;
  display: flex;
  margin: 5px 0;
  margin-right: 20px;

  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }

  @media (min-width: 768px) {
    &:last-child {
      margin-bottom: 5px;
    }
  }
`;

const ColorBox = styled.div`
  background-color: ${(props) => props.colorbox};
  height: 20px;
  margin-right: 15px;
  width: 20px;
`;

const LegendText = styled.p`
  color: grey;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  margin: 0;
`;

const HorizontalRow = styled.div`
  border-top: 1px solid grey;
  height: 1px;
  margin-bottom: 30px;
  width: 80%;
`;
