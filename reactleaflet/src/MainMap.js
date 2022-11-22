import {FeatureGroup,TileLayer,Marker,Popup, MapContainer,Polygon,Polyline,GeoJSON} from 'react-leaflet'
import React, { useState } from 'react'

import 'leaflet-draw/dist/leaflet.draw.css'

import district from './LalitpurGEOJSON.json'
import 'leaflet/dist/leaflet.css'
import L, { circle, icon } from'leaflet'
import { Disaster } from './Disaster';
import { EditControl } from 'react-leaflet-draw'
import { FastField } from 'formik'


function GetIcon(_iconSize,type){
  return L.icon({
    iconUrl:require('./'+type+'.jpg'),
    iconSize:_iconSize
  })
}


export const MainMap = () => {
  
    const layerurl='https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png'
    const limeOptions = { color: 'red' }
    const [polygon, setpolygon] = useState([])
    const LalitpurStyle = {
         fillColor:'red',
         fillOpacity:0,
         color:'black',
      weight:1 }
      const position = [27.5602,85.31110094938776]
      const _onCreate=e=>{
      const {layerType,layer}=e
          if(layerType==='polygon'){
              const {_leaflet_id}=layer
              setpolygon(layers=>[
                ...layers,
                {    
                  id:_leaflet_id,
                  latlng:layer.getLatLngs()[0]
                }
              ])
          }}
    
      const _onEdit=e=>{
        const {layer: {_layer}}=e
        Object.values(_layer).map(({_leaflet_id,editing})=>{
        setpolygon(layers=>layers.map(l=>l.id===_leaflet_id?{...L,latLngs:{...editing.latlng[0]}}:l))
       }) 
      }


      const _onDelete=e=>{
       const {layers:{_layers}}=e
       Object.values(_layers).map(_leaflet_id=>{
        setpolygon(layers=>layers.filter(l=>l.id===_leaflet_id))
       })
      }
      

    return (
      <div>
    <MapContainer center={position} zoom={11} scrollWheelZoom={false}>
     
          <GeoJSON  data={district.features} pathOptions={LalitpurStyle} />
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url={layerurl}/>    
             <FeatureGroup>
        <EditControl 
          postion='topright'
         onCreated={_onCreate} 
         onEdited={_onEdit} 
         onDeleted={_onDelete}
         draw={{
          rectangle:false,
          polyline:false,
          circle:false,
          circlemarker:false,
          marker:false
         }}
         />
        <Disaster/>
        </FeatureGroup>
  </MapContainer>
  {JSON.stringify(polygon)}
  </div>
  )
}
