import React, { useEffect, useState } from 'react';
import { Video_Catagory_Api } from '../utils/Constant';
import Videos from './Videos';
import { Link } from 'react-router-dom';


const MainContainer = () => {
  const [videos,setVideos] = useState([]);
  useEffect(()=>{FetchVideo()},[]);
  const FetchVideo = async() => {
    const data = await fetch (Video_Catagory_Api);
    const json = await data.json();
    setVideos(json.items);
  }
  return (
    <div className='flex flex-wrap mx-6 mt-16 '>
    {videos.map((item,index) => 
    <Link to="/watch">
    <Videos 
    key={item.id}
    data={videos[index]}/>
    </Link>
  )}    
    </div>
  )
}

export default MainContainer