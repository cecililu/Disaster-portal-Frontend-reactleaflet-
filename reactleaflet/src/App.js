import './App.css';
import { Panel } from './Panel';
import { NavBar } from './NavBar';
import { MainMap } from './MainMap';

function App() {

return (
    <div className='App'>
      <NavBar/>
    <div className='grid grid-cols-4 gap-0 h-screen'>
       <div className='col-span-3'>
          <MainMap/>
       </div>
       <div className='text-white col-span-1'>   
        <Panel/>
     </div>
    </div>
  </div>
  );
}

export default App;
