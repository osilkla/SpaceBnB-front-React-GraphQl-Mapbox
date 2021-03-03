import React from "react";
import { NavigationControl } from 'react-map-gl';

const navControlStyle = {
  right: 10,
  top: 50
};

const NavControl = () => {
  return (
    <NavigationControl style={navControlStyle} />
  )
}
export default NavControl;
