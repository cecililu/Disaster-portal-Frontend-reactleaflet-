import {FeatureGroup,TileLayer,Marker,Popup, MapContainer,Polygon,Polyline,GeoJSON} from 'react-leaflet'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import 'leaflet-draw/dist/leaflet.draw.css'
import '../node_modules/leaflet/dist/leaflet.css';
import district from './LalitpurGEOJSON.json'
import 'leaflet/dist/leaflet.css'
import L, { circle, icon } from'leaflet'
import { Disaster } from './Disaster';
import { EditControl } from 'react-leaflet-draw'
import { FastField } from 'formik'


function GetIcon(_iconSize,type){
  return L.icon({
    iconUrl:
		'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
	shadowUrl:
		'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
  })
}


export const MainMap = ({position, setPosition,needmarker}) => {
   
    const [draggable, setDraggable] = useState(true)
   const [geojson, setgeojson] = useState({})
     console.log("asdasdasdasdasdasda__________--",geojson)
    const layerurl='https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png'
    const limeOptions = { color: 'red' }
    const [polygon, setpolygon] = useState([])
    const LalitpurStyle = {
         fillColor:'red',
         fillOpacity:0,
         color:'black',
      weight:1 }
      
      
      const _onCreate=e=>{
        console.log('created')
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
        const {layers: {_layers}}=e
         Object.values(_layers).map(({_leaflet_id,editing})=>{
            setpolygon(layers=>layers.map(l=>l.id===_leaflet_id
              ?{...l,latLngs:{...editing.latlngs[0]}}:l))
       }) 
      }
      const _onDelete=e=>{
        const {layers: {_layers}}=e
         Object.values(_layers).map(_leaflet_id=>{
        setpolygon(layers=>layers.filter(l=>l.id===_leaflet_id))
       })
      }
      const markerRef = useRef(null)
      const eventHandlers = useMemo(
        () => ({
          dragend() {
            const marker = markerRef.current
            if (marker != null) {
              setPosition(marker.getLatLng())
            }
          },
        }),
        [],
      )
       const getgeojson=async()=>{
         
         let data=await fetch("http://127.0.0.1:8000/api/disaster/v1/locals/1/")
         data=await data.json()
         setgeojson(data)

       }

       useEffect(()=>{
         getgeojson()
        },[])

    return (
      <div>
    <MapContainer center={[27.5602,85.31]} zoom={11} scrollWheelZoom={false}>
     
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
          point:true,
          rectangle:false,
          polyline:true,
          circle:false,
          circlemarker:false,
          marker:false
         }}
         />
       
        <Disaster/>
         {needmarker?<Marker
            icon={GetIcon()}
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}>
           <Popup minWidth={90}>
            <span>
           'Drag this Marker to locate Disaster'
        </span>
      </Popup>
       </Marker>:''}
        
        </FeatureGroup>
      
  </MapContainer>
  {JSON.stringify(polygon)}
  Marker postion {JSON.stringify(position)}
  </div>
  )
}
