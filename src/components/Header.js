import React from 'react';
import { Menu, Search, User } from '../utils/Constant';
import { Logo } from '../utils/Constant';
import { useDispatch } from 'react-redux';
import { toggelmenu } from '../utils/menuSlice';

const Header = () => {
 const dispatch = useDispatch();
 const HandelMenu = () =>{
    dispatch(toggelmenu());
 }
  return (
    <div className='flex justify-between pt-3 px-3 text-center'>
        <div className='flex'>
            <img className='h-8 text-white bg-black' 
            alt='Menu'
            src={Menu}
            onClick={HandelMenu}/>
            <img className='h-10 px-2'
            alt='Logo'
            src={Logo}/>
        </div>
        <div className='flex'>
            <input className='border border-slate-200 h-8 rounded-l-xl w-96 px-2 bg-black'
            type='text' placeholder='search'/>
            <img className='h-8 px-3   rounded-r-xl border border-black  bg-slate-900'
            src={Search}
            alt='Search'/>
        </div>
        <div>
            <img className='h-10'
            alt='User'
            src={User}/>
        </div>
    </div>
  )
}

export default Header