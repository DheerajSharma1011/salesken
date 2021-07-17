import './App.css';
import React,{useState} from "react";
import BottomSlider from "./BottomSlider";
import Wave from "./Wave";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import SkipNextIcon from '@material-ui/icons/SkipNext';

function App() {
  const [toggle,setToggle] = useState(true);
  return (
    <div className="Main">
            <Wave/>
       <div className="mainbtn">
           <button className="btn1"> <VolumeUpIcon style={{ color: 'skyblue' }}/> </button>
           {
            toggle ? <button className="btn2" onClick={()=>setToggle(false)}> <PlayArrowIcon style={{ color: 'skyblue' }}/> </button>
                   : <button className="btn2" onClick={()=>setToggle(true)}> <PauseIcon style={{ color: 'skyblue' }}/>     </button> 
           }
           <button className="btn3"> <SkipNextIcon style={{ color: 'skyblue' }}/> </button>
       </div>
       <BottomSlider/>
    </div>
  );
}

export default App;
