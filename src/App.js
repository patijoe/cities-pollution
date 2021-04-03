import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { CITIES_API } from "./services";
import { INTERVAL_SECONDS } from "./utils/constants";
import Home from "./modules/Home";
import CityDetails from './modules/map/CityDetails';

export default function App() {
  const [citiesList, setCitiesList] = useState([]);

  useEffect(() => {
    const getCities = () => {
      fetch(CITIES_API)
        .then((response) => response.json())
        .then((response) => {
          setCitiesList(response);
        });
        
    };
    
    getCities();

    const interval = setInterval(() => {
      getCities();
    }, INTERVAL_SECONDS);

    return () => clearInterval(interval);
  }, []);

  

  return (
    citiesList.length && <BrowserRouter>
      <Switch>
        <Route 
          exact 
          path="/" 
          render={() => 
            <Home citiesList={citiesList} />
          } 
        />

        <Route 
            path = "/:cityId"
            render = {(routerProps) => (
              <CityDetails
                match={routerProps.match}
                citiesList={citiesList}
              />
              )}
            />
      </Switch>
    </BrowserRouter>
  );
}
