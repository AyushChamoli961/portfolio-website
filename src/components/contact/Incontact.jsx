import React from 'react'

const Incontact = (props) => {
  return (
    <div className="Incontact-container">
        {props.icon}
        <h4>{props.type}</h4>
        <h5>{props.address}</h5>
        <a href={props.send} target='_blank' rel='noreferrer'>Send a Message</a>
    </div>
  )
}

export default Incontact