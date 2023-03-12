import React from 'react'
import Hero from '../components/Hero' 
import About from '../components/About'
import Experience from '../components/Experience'

import '../styles/Home.css'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  )
}

export default Home