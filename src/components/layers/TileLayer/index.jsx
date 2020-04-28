import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { tileLayer } from 'leaflet'

const TileLayer = (props) => {
  const { map, url } = props

  useEffect(() => {
    tileLayer(url).addTo(map)
  }, [map])

  return <div></div>
}

TileLayer.propTypes = {
  map: PropTypes.object,
  url: PropTypes.string.isRequired
}

export default TileLayer
