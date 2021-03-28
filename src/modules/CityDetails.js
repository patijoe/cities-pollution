import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


function CityMap(props) {
    const {citiesList} = props;
    const cityId = props.match.params.cityId;

    console.log('citiesList', citiesList);
    console.log('cityId', cityId);
    
    const citySelected = citiesList.find(city => city.id === cityId);
    
    console.log('citySelected', citySelected);


    return(
        <Map google={props.google} zoom={14}>
 
      </Map>
    )
}

export default GoogleApiWrapper({
      apiKey: 'AIzaSyCA5VdzPX8Vp5kmJscmfNRCOqIT7j0U9Mg'
})(CityMap)