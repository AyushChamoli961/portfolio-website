import React from 'react'

const Inportfolio = (props) => {
  return (
    <div className='Inportfolio-container'>
        <img src={props.image} alt="portfolio-img" />
        <h3>{props.title}</h3>
        <div className="Inportfolio-cta">
          <a href={props.link1} target='_blank' rel='noreferrer' className='btn'>Github</a>
          <a href={props.link2} target='_blank' rel='noreferrer' className='btn'>Live Demo</a>
        </div>
    </div>
  )
}

export default Inportfolio