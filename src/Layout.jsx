import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = ({ user, setUser }) => {
  return (
    <div>
        <Navbar user={user} setUser={setUser} />
        <Outlet/>
    </div>
  )
}
export default Layout;