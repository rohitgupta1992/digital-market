import React from 'react'
import '../Style/footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { TiBusinessCard } from "react-icons/ti";
import { FaCircleRadiation } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='sub-footer'>
            <div className=''>
               
               <h1>
                “Stand out online and make

an impact”
                </h1>
                <h6>David Smith CEO of a Tech Startup</h6>
                <p>Jump on a membership and start requesting designs right away!</p>
                <button className='see-pricing-btn'>See Pricing</button>
            </div>
        </div>
        <div className='footer-clickit'>
            <div>
                <p>ClickIt</p>
                <p>
                Click It - is a leading digital marketing agency
dedicated to driving success for businesses
online. With expertise in SEO, PPC, social
media, content creation, and more, we offer
tailored solutions to maximize ROI.

In the USA, UK, and Canada working with top-
tier clients, from start-ups to enterprises.
                </p>
            </div>
            <div>
            <span style={{color:"#93e317"}}>Our Services</span>
            <p>SEO Marketing</p>
            <p>Research Topic Trends</p>
            <p>Email Marketing</p>
            <p>Google PPC</p>
            </div>
            <div>
            <span style={{color:"#93e317"}}>Our Location</span>
            <p>USA</p>
            <p>UK</p>
            <p>Canada</p>
            <p>Virtual</p>
            </div>
            <div>
            <span style={{color:"#93e317"}}>Contact us</span>
            <p><TiBusinessCard />&nbsp; info@kronix.com</p>
            <p><FaPhoneAlt />&nbsp; (001) 1231 3435</p>
            <p><FaInstagramSquare /> <FaLinkedin/> <FaCircleRadiation/></p>
            <p>Google PPC</p>
            </div>
        </div>
        <div className='line'></div>
        <div className='footer-last-sec'>
            <ul>
            <li>Process</li>
            <li>Benefits</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>FAQ</li>
            </ul>
            <div>
            © 2024 RajaramanR3- All Right Reserved
            </div>
        </div>
    </footer>
  )
}

export default Footer