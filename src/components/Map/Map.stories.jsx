import React from 'react'
import Map from './index'
import TileLayer from '../layers/TileLayer'

export default {
  component: Map,
  title: 'Map',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
}

export const mapData = {
  height: 512,
  width: 512,
  center: [-21.26, -44.99],
  zoom: 13
}

export const Empty = () => <Map {...mapData} />

export const WithTileLayer = () => (
  <Map {...mapData}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  </Map>
)
