import React,{useState} from 'react'

// import {Link} from 'react-router-dom'
import '../styles/Navbar.css'


function Navbar(){
    const [styleApply,setStyleAppy]=useState(false);
    const [navOpen, setNavOpen] = useState(false);
    window.addEventListener("scroll",()=>{
        if(window.scrollY >20){
            setStyleAppy(true)
        }
        else{
            setStyleAppy(false)
        }
        
    })
    return(
        <div className={`navbar ${styleApply?"navScroll":""}`}>
            <div className="logo">ROHIT</div>
            <div className="hamMenu" onClick={()=>setNavOpen((prev)=>!prev)} >
                <div className={navOpen?"hamburger hamClose":"hamburger"}></div>
            </div>
            <div className={`navLinks ${navOpen?"navLinksOpen":""}`}>
                <a href="#HomeSec" onClick={()=>setNavOpen(false)} className="navLink">Home</a>
                <a href="#AboutSec" onClick={()=>setNavOpen(false)} className="navLink">About</a>
                <a href="#SkillSec" onClick={()=>setNavOpen(false)} className="navLink">Experience</a>
                <a href="#PortfolioSec" onClick={()=>setNavOpen(false)} className="navLink">Portfolio</a>
                <a href="#ContactSec" onClick={()=>setNavOpen(false)} className="navLink">Contact</a>
            </div>
        </div>
    )
}

export default Navbar;