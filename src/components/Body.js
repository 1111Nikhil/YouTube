import React from 'react'
import Menu from './Menu'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
        <Menu/>
        <Outlet/>
    </div>
  )
}

export default Body