import homeImg from '../assets/homeImg.svg'
import { HashLink as Link } from 'react-router-hash-link';
import CV from '../assets/ROHIT-PRATAP-Resume.pdf'
import React from 'react'
function Hero() {
    return(
        <>
            <div className='homeSec' id='HomeSec'>
      <div className="textDiv">
        <div className="helloDiv">
          <h3>Hello, I'm</h3>
        </div>
        <h1>ROHIT PRATAP</h1>
        <p>WEB DEVELOPER/DESIGNER</p>
        <div className="btnDiv">
          <Link to="/#ContactSec" className='btn btnPrimary'><span>HIRE ME</span></Link>
          <a href={CV} download className='btn btnSecondary'><span>GET CV</span></a>
        </div>
      </div>
      <div className="imgDiv">
        <img src={homeImg} alt="Developer-boy" />
      </div>
    </div>
        </>
    )
}

export default Hero;