import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addInfo } from '../utils/videoInfo';
import {closeMenu} from '../utils/menuSlice'

const Videos = ({data}) => {

    const dispatch = useDispatch();
    const HandelInfo = () => {
        dispatch(addInfo(data));
        dispatch(closeMenu());
    }
    const {snippet,statistics} = data;
    const {channelTitle,description,title,thumbnails} = snippet;
    
  return (
    <div className='text-white  mx-2 w-60 shadow-lg ' onClick={HandelInfo}>
     <img className='p-2  rounded-3xl'
     alt='Video' src={thumbnails.medium.url}/>
     <ul className='px-3'>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}Views</li>
    </ul>
    </div>
  )
}

export default Videos