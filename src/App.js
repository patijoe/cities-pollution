import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { CITIES_API } from "./services";
import { INTERVAL_SECONDS } from "./utils/constants";
import Home from "./modules/Home";

export default function App() {
  const [citiesList, setCitiesList] = useState("");

  useEffect(() => {
    getOrderedCities();

    const interval = setInterval(() => {
      getOrderedCities();
    }, INTERVAL_SECONDS);

    return () => clearInterval(interval);
  }, []);

  const getOrderedCities = () => {
    fetch(CITIES_API)
      .then((response) => response.json())
      .then((response) => {
        const sortedCitiesList = response.sort((a, b) =>
          a.level > b.level ? 1 : -1
        ).reverse();
        setCitiesList(sortedCitiesList);
      });
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home citiesList={citiesList} />} />

        {/* <Route 
            path = "/:id"
            render = {(routerProps) => (
              <CityDetails
              match={routerProps.match}
              />
              )}
            /> */}
      </Switch>
    </BrowserRouter>
  );
}
