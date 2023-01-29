import React from 'react'
import {BiCheck} from 'react-icons/bi'

const Inservices = (props) => {
  return (
    <div className='Inservices-container'>
        <h2>{props.title}</h2>
        <div className="services-list">
            <ul>
                <li><BiCheck className='services-icon'/> {props.services1}</li>
                <li><BiCheck className='services-icon'/> {props.services2}</li>
                <li><BiCheck className='services-icon'/> {props.services3}</li>
                <li><BiCheck className='services-icon'/> {props.services4}</li>
                <li><BiCheck className='services-icon'/> {props.services5}</li>
            </ul>       
        </div> 
    </div>
  )
  }

export default Inservices