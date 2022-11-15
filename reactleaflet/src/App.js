import './App.css';
import { Map, TileLayer,Marker,Popup, MapContainer} from 'react-leaflet'
import { Panel } from './Panel';
import { NavBar } from './NavBar';
// import {Icon} from 'leaflet'
function App() {
  const position = [51.505, -0.09]
  return (
    <div className='App'>
      <NavBar/>
    <div className='grid grid-cols-4 gap-0 h-screen'>
       <div className='col-span-3'>
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
  <div className='bg-cyan-300 text-white col-span-1'>   
     <Panel/>
  </div>
  </div>
  </div>
  );
}

export default App;
