import React from "react";
import styled from "styled-components";

export default function Filter(props) {
  const { handleFilterName } = props;

  return (
    <FilterContainer>
      <LabelInput htmlFor="filterName">¿Que ciudad buscas?</LabelInput>
      <InputField
        id="filterName"
        type="text"
        onChange={handleFilterName}
      />
    </FilterContainer>
  );
}
const FilterContainer = styled.div`
margin: 0 30px 15px 0;
`;

const LabelInput = styled.label`
  margin-right: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: grey;
`;

const InputField = styled.input`
  border: 0;
  border-bottom: 2px solid grey;
  width: auto;
  font-family: 'Roboto', sans-serif;
  color: grey;
`;
