import * as React from 'react';
import { useContext, useState } from 'react';
import ReactMapGL , { Marker,  Popup }from 'react-map-gl';
import {MAP_TOKEN} from '../../../conf'
import SpaceCenterContext from '../../../context/SpaceCenterContext';
import MarkerPopUp from './MarkerPopUp';
import MapControl from './MapControl';
const MapGL = ({spaceCenters}) => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 900,
    latitude: 41.579606918652054,
    longitude: 4.244298260567439,
    zoom: 3.5,
    bearing: 0,
    pitch: 0,
    transitionDuration: 1000,
  });

  const [currentSpaceCenter, setCurrentSpaceCenter] = useContext(SpaceCenterContext);
  const [showPopup, togglePopup] = React.useState(false);
  const mapGl = React.useRef(null);

  const handleClickMarker = () => {
    togglePopup(true)
    setViewport(prevState=>({
      ...prevState,
      longitude:currentSpaceCenter.longitude, latitude:currentSpaceCenter.latitude
    }))
  }
  return (
    <ReactMapGL
      mapboxApiAccessToken={MAP_TOKEN}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      ref={mapGl} > 
      <MapControl/>

      {showPopup && currentSpaceCenter && <Popup
          latitude={currentSpaceCenter.latitude}
          longitude={currentSpaceCenter.longitude }
          closeButton={true}
          closeOnClick={false}
          onClose={() => togglePopup(false)}
          anchor="bottom"
          offsetTop={0}
          offsetLeft={40} >
          <MarkerPopUp text={currentSpaceCenter.name}/>
        </Popup>}
       
      {spaceCenters && spaceCenters.map((sp) => {
        return (
          <div onMouseOver={()=> setCurrentSpaceCenter(sp)} onClick={()=> handleClickMarker()}> 
            <Marker latitude={sp.latitude} longitude={sp.longitude} >
                {currentSpaceCenter && currentSpaceCenter.id === sp.id ? <img src="pin-hover.svg" alt="pin" />: <img src="pin.svg" alt="pin" />}
            </Marker>
          </div>         
        )
      })}      
  </ReactMapGL>
  );
}

export default MapGL;