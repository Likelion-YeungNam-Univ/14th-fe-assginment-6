import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = ({setUserId, userId, setPassword, password}) => {
  return (
    <div>
      <Navbar setUserId={setUserId} userId={userId} setPassword={setPassword} password={password} />
      <Outlet />
    </div>
  )
}

export default Layout