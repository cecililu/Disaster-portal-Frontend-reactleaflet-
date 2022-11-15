import { Map, TileLayer,Marker,Popup, MapContainer} from 'react-leaflet'
import React from 'react'
import {Icon} from 'leaflet';
import { data } from './data';
export const MainMap = () => {
    const position = [27.673223768106425,85.31110094938776]
    const [activeMarker,setactiveMarker]=React.useState(null)
   
    
    return (
    <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
    <TileLayer
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>    
       
       {data.features.map((item)=>{
         console.log("point",item.geometry.type)
        if(item.geometry.type=='Point'){
          return <Marker onClick={()=>{ console.log("Marker clicked");setactiveMarker(item)}} key={item.properties.id} position={[item.geometry.coordinates[1],item.geometry.coordinates[0]]}/>
        }else{
          console.log('No point data')
        }
     })}
    {activeMarker && 
        <Popup location={[activeMarker.geometry.coordinates[1],activeMarker.geometry.coordinates[0]]}>
          <div>
            <h1>{activeMarker.properties.id}</h1>
            <h2>{activeMarker.properties.name}</h2>
            
          </div> 
        </Popup>
    }
    
  </MapContainer>
  )
}
