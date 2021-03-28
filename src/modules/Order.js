import React from "react";

export default function Order(props) {
  const { handleSelect } = props;

  return (
    <select name="sort" onChange={handleSelect}>
      <option value="pollution_ascendent">Menor a mayor contamincación</option>
      <option value="pollution_descendent">Mayor a menor contamincación</option>
    </select>
  );
}
