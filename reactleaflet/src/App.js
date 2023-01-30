import './App.css';
import { Panel } from './Panel';
import { NavBar } from './NavBar';
import { MainMap } from './MainMap';
import {
  BrowserRouter,
  
} from "react-router-dom";
import { useState } from 'react';
import { Link, Route, Routes, useParams } from "react-router-dom"
function App() {
const [count, setcount] = useState(0)
const [movableMarkerPosition, setmovableMarkerPosition] = useState ([27.5602,85.31])
const [needmarker,setneedmarker]=useState(0)
return (<>
  <BrowserRouter>
    <div className='App'>
        <NavBar/>
    <div className='grid grid-cols-4 gap-0 h-screen'>
       <div className='col-span-3'>
          <MainMap position={movableMarkerPosition} setPosition={setmovableMarkerPosition} needmarker={needmarker}/>
       </div>
       <div className='text-white col-span-1'>   
        <Panel setcount={setcount} position={movableMarkerPosition} setneedmarker={setneedmarker}/>
     </div>
    </div>
    
  </div>
  </BrowserRouter>
  
  </>
  );
}

export default App;
