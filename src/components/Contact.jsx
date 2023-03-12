import '../styles/Contact.css'
import mail from '../assets/mail.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import sendIcon from '../assets/sendIcon.svg'
import React from 'react'


function Contact(){
    const handleCopy =()=>{
        navigator.clipboard.writeText("pratap.rohit002@gmail.com");
    }

    return(
        <>
            <div className='ContactSec' id='ContactSec'>
                <div className="ContactDiv">
                    <div className="textContent">
                        <p>it is very important for me to keep in touch with you, so i am always ready to answer any question that interest you.</p>
                        <div onClick={handleCopy} className="emailDiv">
                            <div>
                                <div className='mail'>
                                    <img src={mail} alt="Email" />
                                    EMAIL:
                                </div>
                                <div>pratap.rohit002@gmail.com</div>
                            </div>
                            <span>Copy</span>
                        </div>
                        <div className="iconDiv">
                            <a href="https://www.instagram.com/rohitpratap002/"><img src={instagram} alt="Instagram" /></a>
                            <a href="https://www.facebook.com/rohit.pratap.311056"><img src={facebook} alt="Facebook" /></a>
                            <a href="https://www.linkedin.com/in/rohit-pratap-866294212/"><img src={linkedin} alt="LinkedIn" /></a>
                            <a href="https://github.com/rohitpratap002"><img src={github} alt="Github" /></a>
                        </div>
                    </div>
                    <div className="formDiv">
                        <h3>Contact</h3>
                        <p className="comment">{"//"} Submit the form to Start a chat.</p>
                        <form>
                            <input type="text" name="name" id="NameInput" className="input" placeholder='Enter Your Name' />
                            <input type="email" name="email" id="NameInput" className="input" placeholder='Enter Your Email' />
                            <textarea name="message" id="TextInput" className="input textInput" placeholder='Your Message Here' ></textarea>
                            <button className='btn btnPrimary' id='formSubmit'><span>Send <img src={sendIcon} alt=" " /></span></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact