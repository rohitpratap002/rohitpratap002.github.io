import '../styles/Contact.css'
import mail from '../assets/mail.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import sendIcon from '../assets/sendIcon.svg'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact(){
    const handleCopy =()=>{
        navigator.clipboard.writeText("pratap.rohit002@gmail.com");
    }
    const form = useRef();
    const sendSuccesful=()=>{
        document.getElementById("sent").innerHTML="Sent SucessFully 👍"
    }
    const sendEmail = (e) => {
        e.preventDefault();

        console.log(form.current)
        emailjs.sendForm('service_tfrve07', 'template_tuxl7l5', form.current, '3HkPCOP9YhLREp4rN')
        .then((result) => {
            console.log(result.text);
            sendSuccesful()
        }, (error) => {
            console.log(error.text);
            alert("There is a problem while submiting, Please Try again after some Time.")
        });
    };

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
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="user_name" id="NameInput" className="input" required placeholder='Enter Your Name' />
                            <input type="email" name="user_email" id="NameInput" className="input" required placeholder='Enter Your Email' />
                            <textarea name="message" id="TextInput" className="input textInput" required placeholder='Your Message Here' ></textarea>
                            <button type="submit" className='btn btnPrimary' id='formSubmit'><span id='sent'>Send <img src={sendIcon} alt=" " /></span></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact