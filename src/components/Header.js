import React, { useEffect, useState } from 'react';
import { Menu, Search, Search_API, User } from '../utils/Constant';
import { Logo } from '../utils/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { toggelmenu } from '../utils/menuSlice';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
 const dispatch = useDispatch();
 const [search,setSearch] = useState("");
 const [searchResult,setSearchResult] = useState();
 const [showSearch,setShowSearch] = useState(false);
 const suggestion = useSelector(store => store.search);
 const HandelMenu = () =>{
    dispatch(toggelmenu());
 }
 useEffect(() => {
 const Timer =setTimeout(() =>{
 if (suggestion[search])
 { setSearchResult(suggestion[search])}
 else
    {FetchSearch()}},200);
return() => {clearTimeout(Timer)}},[search]);
 const FetchSearch = async() => {
    const data = await fetch(Search_API+search);
    const json = await data.json();
    setSearchResult(json[1]);
    dispatch(
        cacheResults({
          [search]: json[1],
        })
      );
 }
  return (
    <div className='fixed w-full'>
    <div className='flex justify-between pt-3 px-3 text-center'>
        <div className='flex'>
            <img className='h-8 text-white bg-black cursor-pointer ' 
            alt='Menu'
            src={Menu}
            onClick={HandelMenu}/>
            <img className='h-10 px-2'
            alt='Logo'
            src={Logo}/>
        </div>
        <div className='flex'>
            <input className='border border-slate-200 h-8 rounded-xl w-96 px-2 bg-black text-white float-left'
            type='text' placeholder='search'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            onFocus={() => setShowSearch(true)}
            onBlur={() => setShowSearch(false)}/>
            <img className='h-8 px-3 -ml-12 cursor-pointer'
            src={Search}
            alt='Search'/>
        </div>
        <div>
            <img className='h-10'
            alt='User'
            src={User}/>
        </div>
    </div>
   {showSearch && <div className='absolute top-12 left-[33rem]  w-[22rem] bg-white '>
        <ul>
        {searchResult?.map((s) => <li key={s} className="shadow-sm px-3 py-2 hover:bg-gray-100"> {s}
                </li>)}
        </ul>
    </div>}
    </div>
  )
}

export default Header