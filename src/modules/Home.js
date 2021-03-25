import React, {useState} from "react";
import styled from "styled-components";

export default function Home(props) {
  const { citiesList } = props;
  const [filteredName, setFilteredName] = useState('');

  const handleFilterName = event => {
      const inputValue = event.currentTarget.value;
      setFilteredName(inputValue);
  }

  return (
    <HomeSection>
      <HomeTitle>Como estan nuestras ciudades de contaminadas?</HomeTitle>
      <input type="text" onChange={handleFilterName}></input>
      <CitiesListContainer>
        {citiesList &&
          citiesList
          .filter(item => item.name.toUpperCase().includes(filteredName.toUpperCase()))
          .map((city) => {
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
