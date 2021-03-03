import React from "react";
import { GeolocateControl } from 'react-map-gl';

const geolocateControlStyle = {
  top: 10,
  right: 10
};

const GeoControl = () => {
  return (
    <GeolocateControl
      style={geolocateControlStyle}
      positionOptions={{ enableHighAccuracy: true }}
      trackUserLocation={true}
      auto
    />
  )
}
export default GeoControl;
