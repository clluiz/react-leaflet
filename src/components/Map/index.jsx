import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { map } from 'leaflet'

import 'leaflet/dist/leaflet.css'

const Map = (props) => {
  const mapRef = useRef(null)
  const [mapInstance, setMapInstance] = useState(null)
  
  useEffect(() => {
    setMapInstance(
      map(mapRef.current, {
        zoomControl: false,
        zoom: props.zoom,
        center: props.center
      })
    )
  }, [])

  return (
    <>
      <div
        id={props.id}
        ref={mapRef}
        style={{ width: props.width, height: props.height }}
      ></div>
      <>
        {mapInstance &&
          React.Children.map(props.children, (child) =>
            React.cloneElement(child, { map: mapInstance })
          )}
      </>
    </>
  )
}

Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  children: PropTypes.array,
  id: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired
}

Map.defaultProps = {
  // [lat, long]
  center: [0, 0],
  height: 500,
  width: 500,
  zoom: 10
}

export default Map
