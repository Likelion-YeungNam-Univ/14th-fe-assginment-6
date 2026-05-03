import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='w-full min-h-screen bg-gray-200'>
        <Navbar/>

        <div className="w-full h-[50%] flex justify-center items-center gap-3 border-2 border-gray-300 rounded-2xl bg-gray-200">
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout;