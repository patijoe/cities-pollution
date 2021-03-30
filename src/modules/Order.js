import React from "react";
import styled from "styled-components";

export default function Order(props) {
  const { handleSelect } = props;

  return (
    <SelectComponent name="sort" onChange={handleSelect}>
      <OptionItem value="pollution_ascendent">
        Ordena de menor a mayor contamincación
      </OptionItem>
      <OptionItem value="pollution_descendent">
        Ordena de mayor a menor contamincación
      </OptionItem>
    </SelectComponent>
  );
}

const SelectComponent = styled.select`
  height: 30px;
`;

const OptionItem = styled.option`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: grey;
`;
