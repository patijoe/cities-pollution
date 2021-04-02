import React from "react";
import styled from "styled-components";

export default function Filter(props) {
  const { handleFilterName } = props;

  return (
    <FilterContainer>
      <LabelInput htmlFor="filterName">¿Que ciudad buscas?</LabelInput>
      <InputField id="filterName" type="text" onChange={handleFilterName} />
    </FilterContainer>
  );
}
const FilterContainer = styled.div`
  margin: 0 0 15px;

  @media (min-width: 360px) {
    margin: 0 25px 15px 25px;
  }
`;

const LabelInput = styled.label`
  color: grey;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  margin-right: 10px;
`;

const InputField = styled.input`
  background-color: rgb(245, 245, 245);
  border: 0;
  border-bottom: 2px solid grey;
  color: grey;
  font-family: "Roboto", sans-serif;
  width: auto;
  
  &:focus {
    outline: none;
  }
`;
