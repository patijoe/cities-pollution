import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { CITIES_API } from "./services";
import { INTERVAL_SECONDS } from "./utils/constants";
import Home from "./modules/Home";

export default function App() {
  const [citiesList, setCitiesList] = useState([]);

  useEffect(() => {
    getCities();

    const interval = setInterval(() => {
      getCities();
    }, INTERVAL_SECONDS);

    return () => clearInterval(interval);
  }, []);

  const getCities = () => {
    fetch(CITIES_API)
      .then((response) => response.json())
      .then((response) => {
        setCitiesList(response);
      });
      
  };

  return (
    citiesList.length && <BrowserRouter>
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
