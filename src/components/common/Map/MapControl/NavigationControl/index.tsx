import React from "react";
import{ NavigationControl}from 'react-map-gl';

const NavControl = () => {
  const navControlStyle= {
  right: 10,
  top: 50
  };
  return(
    <NavigationControl style={navControlStyle} />
  )
}
export default NavControl;
