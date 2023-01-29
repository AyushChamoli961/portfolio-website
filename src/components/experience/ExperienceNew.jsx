import React from 'react'
import {BsPatchCheckFill} from "react-icons/bs"


const ExperienceNew = (props) => {
  return (
    <div className='new-experience'>
        <BsPatchCheckFill/>
        <div>
          <h3>{props.name}</h3>
          <h4>{props.level}</h4>
        </div>
        
    </div>
  )
}

export default ExperienceNew