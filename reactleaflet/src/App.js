import './App.css';
import { Map, TileLayer,Marker,Popup, MapContainer} from 'react-leaflet'
// import {Icon} from 'leaflet'
function App() {
  const position = [51.505, -0.09]
  return (
    <div className='grid grid-cols-4 gap-4'>
       <div className='col-span-2'>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  <div className='bg-cyan-500 text-white col-span-2'> 
     Overview Panel
  </div>
  </div>
  );
}

export default App;
