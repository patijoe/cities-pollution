import React from "react";
import styled from "styled-components";

export default function Order(props) {
  const { handleSelect } = props;

  return (
    <SelectComponent name="sort" onChange={handleSelect}>
      <option value="pollution_ascendent">
        Ordena de menor a mayor contaminación
      </option>
      <option value="pollution_descendent">
        Ordena de mayor a menor contaminación
      </option>
    </SelectComponent>
  );
}

const SelectComponent = styled.select`
  background: rgb(153, 153, 153);
  border-radius: 5px;
  color: rgb(245, 245, 245);
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  height: 30px;
  padding: 0 5px;

  &:focus {
    outline: none;
  }
`;

