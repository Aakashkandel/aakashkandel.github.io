import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import Masterpage from './Masterpage'



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Masterpage/>}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
