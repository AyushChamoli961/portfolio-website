import React from 'react'
import "./footer.css"
import {BsTwitter} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-container">
        <h2>Ayush Chamoli</h2>
        <div className='links-container'>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
        </div>
        <div className="icons-container">
          <a href="https://twitter.com/Ayush__Chamoli"><BsTwitter/></a>
          <a href="https://twitter.com/Ayush__Chamoli"><BsGithub/></a>
          <a href="https://twitter.com/Ayush__Chamoli"><BsLinkedin/></a>
        </div>
        <h5>Copyright © Ayush Chamoli {new Date().getFullYear()}</h5>
     </div>
    </section>
  )
}

export default Footer