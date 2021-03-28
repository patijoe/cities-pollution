import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


function CityMap(props) {
    const {citiesList} = props;
    const cityId = props.match.params.cityId;
    
    const citySelected = citiesList.find(city => city.id === cityId);

    return(
        <Map 
            google={props.google} 
            zoom={8}
            initialCenter={{
                lat: citySelected.coordinates.latitude,
                lng: citySelected.coordinates.longitude
              }}
        >
            <Marker 
                position={{ lat: citySelected.coordinates.latitude, lng: citySelected.coordinates.longitude }} 
            />
      </Map>
    )
}

export default GoogleApiWrapper({
      apiKey: 'AIzaSyCA5VdzPX8Vp5kmJscmfNRCOqIT7j0U9Mg'
})(CityMap)