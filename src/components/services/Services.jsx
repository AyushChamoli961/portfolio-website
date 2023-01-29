import React from 'react'
import "./services.css"
import Inservices from './Inservices'
const Services = () => {
  return (
    <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="services-container">
          
            <Inservices title="Web Devlopment" services1="Get Beautiful Websites" services2="Trendy Desgins" services3='Ultimate UI/UX experience' services4='Customize your website' services5='Low cost' />
            <Inservices title="Video Editing" services1="Get Beautiful Websites" services2="Trendy Desgins" services3='Ultimate UI/UX experience' services4='Customize your website' services5='Low cost' />
            <Inservices title="Content Writing" services1="Get Beautiful Websites" services2="Trendy Desgins" services3='Ultimate UI/UX ' services4='Customize your ' services5='Low cost' />
        </div>
    </section>
  )
}

export default Services