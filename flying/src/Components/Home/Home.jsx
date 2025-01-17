import React from 'react'

// Imported Images
import video from "../../Assets/bgvids.mp4"
import plane from "../../Assets/newtakeoff.png"

const Home = () => {
  return (
    <div className='home flex container'>
      <div className="maintext">
        <h1>Create Ever-lasting Memories with us</h1>

      </div>

      <div className="homeImages flex">

        <div className="videoDiv">
         <video src={video} autoPlay muted loop className='video'>
          </video> 
        </div>
        <img src={plane}  className='plane' />
      </div>
    </div>
  )
}

export default Home