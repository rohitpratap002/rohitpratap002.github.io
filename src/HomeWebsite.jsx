import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Carousel from './components/Carousel'
import Home from './pages/Home'
import IndivisualProject from './pages/IndivisualProject'
import Projects from './pages/Projects'

import images from './helpers/images'



function homeWebsite() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/carousel' element={<Carousel images={images} />} />
            <Route path='/home' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path={`/project/:id`} element={<IndivisualProject />} />

        </Routes>
    </>
  )
}

export default homeWebsite