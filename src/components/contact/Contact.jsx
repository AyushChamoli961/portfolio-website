import React from 'react'
import "./contact.css"
import Incontact from './Incontact'
import {AiOutlineMail} from "react-icons/ai"
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-subcontainer">
          <Incontact 
            icon={<AiOutlineMail/>} 
            type='Email' 
            address='ayushchamoli001@gmail.com' 
            send='mailto:ayushchamoli001@gmail.com'
          />
          <Incontact 
            icon={<AiOutlineMail/>} 
            type='Email' 
            address='ayushchamoli001@gmail.com' 
            send='mailto:ayushchamoli001@gmail.com'
          />
          <Incontact 
            icon={<AiOutlineMail/>}
            type='Email' 
            address='ayushchamoli001@gmail.com' 
            send='mailto:ayushchamoli001@gmail.com'
          />
        </div>
        <div className="form-container">
        <form action=''>
          <label>
            <input type="text" name='name' placeholder='Your Name'/>
          </label>
          <br />
          <label>
            <input type="email" name="email" placeholder='Your Email' />
          </label>
          <br />
          <label>
            <textarea name="message" rows="5" cols="30" placeholder='Enter your Message' ></textarea>
          </label>
          <br />
          <button type='submit' className='btn'>Submit Response</button>
      </form>
        </div>
      </div>
      
      
    </section>
  )
}

export default Contact