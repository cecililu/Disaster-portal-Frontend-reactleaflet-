import {Marker,Popup,Polygon,Polyline,GeoJSON, useMap} from 'react-leaflet'
import React, { useEffect, useState } from 'react'
import disasterimg from '../src/images.jpg'
import L from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster';
import { data } from 'autoprefixer';

function GetIcon(_iconSize,type){
  // 
  return L.icon({
    iconUrl:require('./'+(type)+'.jpg'),
    iconSize:30
  })
}
const limeOptions={color:'red'}
export const Disaster = () => {
    
    const [data1, setdata] = useState([])
    // console.log(data1?data1[0].long:'nodata','this is data')
    
    const getData=async()=>{
        let maindata=await fetch('http://127.0.0.1:8000/api/disaster/v1/geoapi/')
        maindata= await maindata.json()
        setdata(maindata)
    }
    
    useEffect(() => {
      getData()
    },[])
    if (data1.length>0){
        return(<>
             {data1.map((item)=>{
                console.log("HHHHHHHHHHHHHHH",item)
                return(<Marker icon={GetIcon(20,item.type)} position={[item.lat,item.long]}>
                  <Popup>
                    <div>
                      <h2>{item.disaster}</h2>
                      
                      <span> Rating : {item.rating}</span>
                      <span> Type : {item.type}</span>
                      <h5> Comment:{item.Comment}</h5>
                    </div>
                  </Popup>
                </Marker>) 
             })}
        
        </>);
       }

}
       
