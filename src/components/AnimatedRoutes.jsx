import React from 'react'
import { useState } from 'react'

import { Routes, Route, useLocation } from "react-router-dom";
import Home from '../pages/Home/Home'
import Skills from '../pages/Skills/Skills';
import Portfolio from '../pages/Portfolio/Portfolio';
import Contact from '../pages/Contact/Contact';

import {AnimatePresence} from "framer-motion";


const AnimatedRoutes = () => {

    const location = useLocation()

    return (
        <>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route  path='/' element={<Home /> }/>
            <Route  path='/skills' element={<Skills /> }/>
            <Route  path='/portfolio' element={<Portfolio /> }/>
            <Route  path='/contact' element={<Contact /> }/>
          </Routes>
          </AnimatePresence>
        </>
      )
}

export default AnimatedRoutes