import React from 'react'
import "./experience.css"
import ExperienceNew from './ExperienceNew'
const Experience = () => {
  return (
    <section id='experience'>
        <h5>What Skills  I have</h5>
        <h2>Experience</h2>
        
        <div className='experience-container'>
            <div className='skill'>
                <h2>Frontend Devlopment</h2>
                <div className='skill-details'>
                  <ExperienceNew name='HTML' level='experienced'/>
                  <ExperienceNew name='CSS' level='experienced'/>
                  <ExperienceNew name='Javascript' level='experienced'/>
                  <ExperienceNew name='Bootstrap' level='experienced'/>
                  <ExperienceNew name='React' level='experienced'/>

                </div>
                

            </div>
            
            <div className='skill'>
              <h2>Backend Devlopment</h2>
              <div className="skill-details">
                <ExperienceNew name='HTML' level='experienced'/>
                <ExperienceNew name='CSS' level='experienced'/>
                <ExperienceNew name='Javascript' level='experienced'/>
                <ExperienceNew name='Bootstrap' level='experienced'/>
                <ExperienceNew name='React' level='experienced'/>
              </div> 
            </div>
        </div>

    </section>
  )
}

export default Experience