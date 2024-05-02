import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const WatchVideo = ({info}) => {
    const Detailes = useSelector(store => store.video.videoInfo);
    const [discinfo,setDiscInfo] = useState(false);
    console.log(Detailes);
    if(Detailes === null) return;
  return (
    <div className='text-white mt-16 mx-6 '>
      <div>
        <iframe width="860" height="500" 
        src={"https://www.youtube.com/embed/"+Detailes?.id+"?si=I2GKtmyu2jRCbFTl"} 
        title="YouTube video player" frameBorder="0" 
         referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
         <h1 className='text-lg font-bold leading-10 my-2'>{Detailes.snippet.title}</h1>
    </div>
    <div>
      <button className='text-black bg-white rounded-lg p-2'
      onClick={() => setDiscInfo(!discinfo)}>Info</button>
      {discinfo && <p className='py-1 px-3 w-4/6'>{Detailes.snippet.description}</p>}   
    </div>
    </div>
  )
}

export default WatchVideo