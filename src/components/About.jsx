import React from 'react'
import aboutimg from '../assets/aboutimg.jpg'

function About(){

    return(
        <>
            <div className='homeSec aboutSec' id='AboutSec'>
      <div className="imgDiv">
        <img src={aboutimg} alt="Developer-boy" />
      </div>
      <div className="textDiv">
        <div className="helloDiv">
          <h3>About Me</h3>
        </div>
        <p>Hello there! My name is Rohit Pratap. I am a front-end web developer & designer, and I'm very passionate and dedicated to my work.
            <br/>I have acquired the skills and knowledge necessary to make your project a success.</p>
        <div className="btnDiv">
          <a href="/#/#ContactSec" className='btn btnPrimary'><span>HIRE ME</span></a>
        </div>
      </div>
    </div>
        </>
    )
}

export default About;