import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import Home from './components/pages/Home'
import Navbar from './components/navbar/Navbar'
import StatusTpp from './components/pages/Status'
import TppConfig from './components/pages/TppConfig'
import Process from './components/pages/Process'
import PelletCalculator from './components/pages/pelletCalculator/PelletCalculator'

export default function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='status' element={<StatusTpp />} />
        <Route path='process/*' element={<Process />} />
        <Route path='config' element={<TppConfig />} />
        <Route path='calculator' element={<PelletCalculator />} />
      </Routes>
    </>
  )
}

  