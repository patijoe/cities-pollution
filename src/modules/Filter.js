import React from "react";

export default function Filter(props) {
  const { handleFilterName } = props;

  return (
    <div>
      <label htmlFor="filterName"> Which city are you looking for?</label>
      <input id="filterName" type="text" onChange={handleFilterName}></input>
    </div>
  );
}
