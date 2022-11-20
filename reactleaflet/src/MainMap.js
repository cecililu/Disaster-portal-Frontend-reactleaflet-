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
     const layerurl2="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     const limeOptions = { color: 'red' }
     const LalitpurStyle = {
         fillColor:'red',
         fillOpacity:0,
         color:'black',
      weight:1 }
      const position = [27.5602,85.31110094938776]
      const [activeMarker,setactiveMarker]=React.useState(
        {
            "type": "Feature",
            "properties": {
              "name": "Zoo central Jawalkhel",
              "id":"Animal Hazard"
            },
            "geometry": {
              "coordinates": [
                85.31110094938776,
                27.673223768106425
              ],
              "type": "Point"
            }
          }
    )
    console.log('active Marker',activeMarker)
    return (
    <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
          
    <GeoJSON  data={district.features} pathOptions={LalitpurStyle} />
    <TileLayer
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       url={layerurl}/>    
       <Disaster/>
  </MapContainer>
  )
}
