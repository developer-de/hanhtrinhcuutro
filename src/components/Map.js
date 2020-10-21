import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { GOOGLE_MAP_API_KEY } from '../constants';
import './Map.scss';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 16.618069,
  lng: 107.390788,
};

const Map = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
  });
  if (loadError) return 'Map cannot be loaded right now, sorry.';

  return isLoaded ? (
    <div className="map-container">
      <GoogleMap
        id="map-example"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </div>
  ) : null;
};

export default Map;
