import React from 'react'
import "./header.css"
import Cta from "./Cta"
import me from "../../assets/me1.png"
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header>
     <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Ayush Chamoli</h1>
      <h5 className='text-light'>Full Stack Devloper</h5>
      <Cta />
      <img  src={me} alt="me" className='me' />
      <HeaderSocials/>
      <a href="#contact" className='scroll'>Scroll Down</a>

     </div>
    </header>
  )
}

export default Header