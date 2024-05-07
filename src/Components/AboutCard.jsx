import React from 'react'
import './AboutCard.css';
import { FaQuoteLeft } from "react-icons/fa";
export default function Card(props)   
{
     
  return (
    <div>
       <div className="card">
        <div className="left">
          <FaQuoteLeft className='icon'/>
          <div className="profile-circle" style={{background:`url('${props.image}') no-repeat center center/cover`}}></div>
          <div className="card-name">{props.name}</div>
        </div>
        <div className="right">
        <div className="card-text">
           <p>{props.feedback}</p> 
           <div className="line"></div> 
      </div> 
        </div>
      
    </div>
    </div>
  )
}
