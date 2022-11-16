import { Map, TileLayer,Marker,Popup, MapContainer,Polygon,Polyline} from 'react-leaflet'
import React from 'react'
import {Icon} from 'leaflet';
import { data } from './data';
import disasterimg from '../src/images.jpg'
export const MainMap = () => {
    const limeOptions = { color: 'red' }
    const position = [27.673223768106425,85.31110094938776]
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
    <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
    <TileLayer
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>    
       
       { data.features.map((item)=>{
         if(item.geometry.type=='Point'){
          return <Marker 
               key={item.properties.id} 
                position={[
                    item.geometry.coordinates[1],
                    item.geometry.coordinates[0]
                ]}
                >
                    <Popup>
                       <div>
                       <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src={disasterimg} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.properties.id}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.properties.name}</p>
                                <a href="#" className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <span className='text-white'> More Information</span>
                                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                            
                      </div> 
                     </Popup>  
                </Marker>
             }})    
         }

   

       {data.features.map((item)=>{
         if(item.geometry.type=='LineString'){
            console.log("line",[
              [item.geometry.coordinates[0][1], item.geometry.coordinates[0][0]],  
              [item.geometry.coordinates[1][1],item.geometry.coordinates[1][0]]  
            ])
          return <Polyline pathOptions={limeOptions} 
               key={item.properties.id} 
                positions={[
                    [item.geometry.coordinates[0][1], item.geometry.coordinates[0][0]],  
                    [item.geometry.coordinates[1][1],item.geometry.coordinates[1][0]]  
                  ]}
                >
                     <Popup>
                       <div>
                       <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src={disasterimg} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.properties.id}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.properties.name}</p>
                                <a href="#" className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <span className='text-white'> More Information</span>
                                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                      </div> 
                     </Popup>  
                </Polyline>
             }})    
         } 
        
        { data.features.map((item)=>{
         if(item.geometry.type=='Polygon'){
          console.log('before ply')
          const coordinates=item.geometry.coordinates[0]
          const ply=[
            [coordinates[0][1],coordinates[0][0]],

            [coordinates[1][1],coordinates[1][0]],
            
            [coordinates[2][1],coordinates[2][0]],
            
            [coordinates[3][1],coordinates[3][0]],
            
            [coordinates[4][1],coordinates[4][0]],
            
            [coordinates[5][1],coordinates[5][0]],
            
            [coordinates[5][1],coordinates[5][0]],

            [coordinates[6][1],coordinates[6][0]]
        ]
        console.log('ply',ply)
          return <Polygon 
               key={item.properties.id}  pathOptions={limeOptions}
                positions={ply}
                >
                    <Popup>
                       <div>
                       <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src={disasterimg} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.properties.id}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.properties.name}</p>
                                <a href="#" className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <span className='text-white'> More Information</span>
                                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                            
                      </div> 
                     </Popup>  
                </Polygon>
             }})    
         } 


    
    
  </MapContainer>
  )
}
