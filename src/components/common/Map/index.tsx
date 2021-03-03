import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useCurrentSpaceCenter } from '../../../context/SpaceCenterContext';
import MarkerPopUp from './MarkerPopUp';
import MapControl from './MapControl';
import { SpaceCenterType } from '../../../types/spaceCenterType';

const MapGL = ({ spaceCenters }) => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 41.579606918652054,
    longitude: 4.244298260567439,
    zoom: 3.5,
    bearing: 0,
    pitch: 0,
    transitionDuration: 1000,
  });

  const [currentSpaceCenterSelected, setCurrentSpaceCenterSelected] = useCurrentSpaceCenter();

  const [showPopup, togglePopup] = useState(false);
  const mapGl = React.useRef(null);

  const handleClickMarker = (sp: SpaceCenterType) => {
    togglePopup(true)
    setCurrentSpaceCenterSelected(sp)
    setViewport(prevState => ({
      ...prevState,
      longitude: sp.longitude, latitude: sp.latitude
    }))
  }
  
  useEffect(() => {
    if (currentSpaceCenterSelected) {
      setViewport(prevState => ({
        ...prevState,
        longitude: currentSpaceCenterSelected.longitude, latitude: currentSpaceCenterSelected.latitude
      }))
    }
  }, [currentSpaceCenterSelected])

  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      ref={mapGl} >
      <MapControl />

      {showPopup && currentSpaceCenterSelected && <Popup
        latitude={currentSpaceCenterSelected.latitude}
        longitude={currentSpaceCenterSelected.longitude}
        closeButton={true}
        closeOnClick={false}
        onClose={() => togglePopup(false)}
        anchor="bottom"
        offsetTop={0}
        offsetLeft={40} >
        <MarkerPopUp>{currentSpaceCenterSelected.name}</MarkerPopUp>
      </Popup>}

      {spaceCenters && spaceCenters.map((sp) => {
        return (
          <div key={`markers-${sp.id}`} onClick={() => handleClickMarker(sp)}>
            <Marker latitude={sp.latitude} longitude={sp.longitude} >
              {currentSpaceCenterSelected && currentSpaceCenterSelected.id === sp.id ? <img src="pin-hover.svg" alt="pin" /> : <img src="pin.svg" alt="pin" />}
            </Marker>
          </div>
        )
      })}
    </ReactMapGL>
  );
}

export default MapGL;