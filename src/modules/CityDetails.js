import React from "react";
import { Link } from "react-router-dom";
import CityMap from "./CityMap";

import styled from "styled-components";

export default function CityDetails(props) {
  const { citiesList } = props;
  const cityId = props.match.params.cityId;

  return (
    <>
      <BackButtonContianer>
        <BackButton to="/">VOLVER</BackButton>
      </BackButtonContianer>
      <CityMap citiesList={citiesList} cityId={cityId} />
    </>
  );
}

const BackButtonContianer = styled.div`
  background-color: rgb(245, 245, 245);
  border-radius: 5px;
  cursor: pointer;
  padding: 5px;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
`;

const BackButton = styled(Link)`
  color: #404040;
  text-decoration: none;
`;
