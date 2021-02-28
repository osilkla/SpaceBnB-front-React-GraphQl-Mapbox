import React from "react";
import{GeolocateControl}from 'react-map-gl';

const GeoControl = () => {
  const geolocateControlStyle= {
  right: 10,
  top: 10
  };
  return(
    <GeolocateControl
      style={geolocateControlStyle}
      positionOptions={{enableHighAccuracy: true}}
      trackUserLocation={true}
      auto
    />
  )
}
export default GeoControl;
