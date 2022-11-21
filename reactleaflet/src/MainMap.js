import { TileLayer,Marker,Popup, MapContainer,Polygon,Polyline,GeoJSON} from 'react-leaflet'
import React from 'react'

import district from './LalitpurGEOJSON.json'
import MarkerClusterGroup from 'react-leaflet-cluster';

import 'leaflet/dist/leaflet.css'
import L, { icon } from'leaflet'
import { Disaster } from './Disaster';


function GetIcon(_iconSize,type){
  return L.icon({
    iconUrl:require('./'+type+'.jpg'),
    iconSize:_iconSize
  })
}


export const MainMap = () => {
  
    const layerurl='https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png'
    const limeOptions = { color: 'red' }
    
    const LalitpurStyle = {
         fillColor:'red',
         fillOpacity:0,
         color:'black',
      weight:1 }
      const position = [27.5602,85.31110094938776]
    
    return (
    <MapContainer center={position} zoom={11} scrollWheelZoom={false}>
      <GeoJSON  data={district.features} pathOptions={LalitpurStyle} />
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={layerurl}/>    
        <Disaster/>
  </MapContainer>
  )
}
