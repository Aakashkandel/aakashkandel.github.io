import React from 'react'
import Navbar from './Components/Base/Navbar'
import { Outlet } from 'react-router-dom'

export default function Masterpage() {
  return (
  <>
   <Navbar/>
   <Outlet className="mt-10 "/>   
  </> 
  )
}
