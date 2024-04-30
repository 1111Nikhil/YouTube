import React from 'react'
import { useSelector } from 'react-redux'

const Menu = () => {
  const isMenu = useSelector(store => store.menu.ismenu);
  if(!isMenu) return
  return (
    <div className='m-3 w-48 shadow-md p-2 text-white'>
        <ul className='font-semibold leading-5'>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Home</li>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Shorts</li>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Subscriptions</li>
        </ul>
        <hr></hr>
        <ul className='font-semibold leading-5'>
            <h1 >YOU</h1>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Your Channel</li>
            <li className='hover:bg-slate-200 rounded-md p-2 '>History</li>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Play List</li>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Your Videos</li>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Watch Later</li>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Liked Videos</li>
        </ul>
        <hr></hr>
        <ul className='font-semibold leading-5'>
            <h1>Explore</h1>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Trending</li>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Shoping</li>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Music</li>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Movies</li>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Live</li>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Gaming</li>
            <li className='hover:bg-slate-200 rounded-md p-2 '>News</li>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Sports</li>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Course</li>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Fashion & Beauty</li>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Podcast</li>
        </ul>
        <hr></hr>
        <ul className='font-semibold leading-5'>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Setting</li>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Report History</li>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Help</li>
            <li className='hover:bg-slate-200 rounded-md p-2 '>Send Feedback</li>
        </ul>
        <hr></hr>
    </div>
  )
}

export default Menu