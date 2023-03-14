import React,{useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';

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
                <Link to="/#HomeSec" onClick={()=>setNavOpen(false)} className="navLink">Home</Link>
                <Link to="/#AboutSec" onClick={()=>setNavOpen(false)} className="navLink">About</Link>
                <Link to="/#SkillSec" onClick={()=>setNavOpen(false)} className="navLink">Experience</Link>
                <Link to="/#PortfolioSec" onClick={()=>setNavOpen(false)} className="navLink">Portfolio</Link>
                <Link to="/#ContactSec" onClick={()=>setNavOpen(false)} className="navLink">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar;