import React from 'react'
import './footer.css'

import {BsClockFill,BsFillTelephoneFill,BsTwitter,BsLinkedin} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi'
import {AiFillInstagram} from 'react-icons/ai'
import {FaMapMarkedAlt,FaFacebookF} from 'react-icons/fa'
const Footer = () => {
    return (
        <section className="footer" id="footer">
            <div className="footer-inner">

            
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="100%" height="300" id="gmap_canvas" src={"https://maps.google.com/maps?q=Seedevi%20Family%20Restaurant%20Jayanthi%20Mawatha,%20Anuradhapura%2050000&t=&z=13&ie=UTF8&iwloc=&output=embed"} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
            <div className="footer__elements">
                <div className="card">
                    <div className="logo">
                        <BsClockFill/>
                    </div>
                    <h3>Opening Hours</h3>
                    <h4>07:00am to 10:00pm</h4>
                </div>
                <div className="card">
                    <div className="logo">
                        <BsFillTelephoneFill/>
                    </div>
                    <h3>Phone</h3>
                    <h4>+94 763215389
                        <br/>
                        +94 763215389
                    </h4>
                </div>
                <div className="card">
                    <div className="logo">
                        <HiMail/>
                    </div>
                    <h3>Email</h3>
                    <h4>contact@restuarent.com</h4>
                </div>
                <div className="card">
                    <div className="logo">
                        <FaMapMarkedAlt/>
                    </div>
                    <h3>Address</h3>
                    <h4>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</h4>
                    
                </div>
                
            
            </div>
            
            <div className="social">
                <a href="https://facebook.com"><FaFacebookF className="icon"/></a>
                <a href="https://twitter.com"><BsTwitter className="icon"/></a>
                <a href="https://instagram.com"><AiFillInstagram className="icon"/></a>
                <a href="https://linkedin.com"><BsLinkedin className="icon"/></a>
            </div>
            </div>
            <div className="copyright">
                Coded by <a href="https://hasinthaka.vercel.app" className="hasinthaka">Hasinthaka</a>  All Rights Reserved!
            </div>
        </section>
    )
}

export default Footer
