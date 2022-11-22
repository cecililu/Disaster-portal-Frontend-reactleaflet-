import './App.css';
import { Panel } from './Panel';
import { NavBar } from './NavBar';
import { MainMap } from './MainMap';
import {
  BrowserRouter,
  
} from "react-router-dom";
import { useState } from 'react';
function App() {
const [count, setcount] = useState(0)

return (
  <BrowserRouter>
    <div className='App'>
        <NavBar/>
    <div className='grid grid-cols-4 gap-0 h-screen'>
       <div className='col-span-3'>
          <MainMap/>
       </div>
       <div className='text-white col-span-1'>   
        <Panel setcount={setcount}/>
     </div>
    </div>
  </div>
  </BrowserRouter>
  );
}

export default App;
