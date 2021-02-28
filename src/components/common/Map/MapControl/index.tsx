import GeoControl from "./GeolocateControl"

import NavControl from './NavigationControl'

const MapControl = () => {
  return(
    <>
      <NavControl />
      <GeoControl/>
    </>
  )
}
export default MapControl;
