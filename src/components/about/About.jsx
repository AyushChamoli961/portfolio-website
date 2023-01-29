import React from 'react'
import "./about.css"
import About_img from "../../assets/me-about.jpg"
import {BsTrophy} from "react-icons/bs"
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about-container">
        <div className="about-me">
          <img src={About_img} alt=""  className='about-image' />
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className='about-card'>
              <BsTrophy className='about-icon'/>
              <h5>Experience</h5>
              <small>3+ years working </small>
            </article>
            <article className='about-card'>
              <BsTrophy className='about-icon'/>
              <h5>Experience</h5>
              <small>3+ years working </small>
            </article>
            <article className='about-card'>
              <BsTrophy className='about-icon'/>
              <h5>Experience</h5>
              <small>3+ years working </small>
            </article>
          </div>
           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publ</p>
           <div className='about-button'>
            <a href="#contact" className='btn'>Lets Talk</a>
           </div>
           
        </div>
      </div>
      
    </section>
  )
}

export default About