import React, { useRef } from 'react'
import '../videoplayer/Videoplay.css'
import video from '../../assets/image/video.mp4'
const Videoplay = ({playstate,setplatstate}) => {

 const player=useRef(null);

 const closeplayer=(e)=>{
    if(e.target===player.current){
        setplatstate(false)
    }
 }
    return (
    <div className={`videoplay ${playstate?'':'hide'}`} ref={player} onClick={closeplayer}>
        <video src={video} muted controls autoPlay></video>
      
    </div>
  )
}

export default Videoplay