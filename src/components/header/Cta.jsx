import React from 'react'
import cv from '../../assets/Resume.pdf'
const Cta = () => {
  return (
    <div className='cta'>
        <a href= {cv} download className='btn'>Download Cv</a>
        <a href="#contact" className='btn'>Let's Talk</a>
    </div>
  )
}

export default Cta