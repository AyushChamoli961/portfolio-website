import React from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineMessage} from "react-icons/ai"
import {AiOutlineBook} from "react-icons/ai"
import {RiServiceLine} from "react-icons/ri"
import {RiSuitcaseLine} from "react-icons/ri"
import { useState } from 'react'



const Nav = () => {
  const [activeNav , setActivenav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActivenav("#")} className={activeNav === "#" ? "active": ""}><AiOutlineHome/></a>
      <a href="#contact" onClick={()=> setActivenav("contact")} className={activeNav === "contact" ? "active": ""} ><AiOutlineMessage/></a>
      <a href="#experience" onClick={()=> setActivenav("experience")} className={activeNav === "experience" ? "active": ""}><AiOutlineBook/></a>
      <a href="#services" onClick={()=> setActivenav("services")} className={activeNav === "services" ? "active": ""}><RiServiceLine/></a>
      <a href="#portfolio" onClick={()=> setActivenav("portfolio")} className={activeNav === "portfolio" ? "active": ""}><RiSuitcaseLine/></a>

    </nav>
  )
}

export default Nav