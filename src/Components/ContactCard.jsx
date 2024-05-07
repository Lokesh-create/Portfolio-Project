import React from 'react'
import './ContactCard.css';
export default function ContactCard(props) 
{
  return (
    <div>
        <div className="contact-card">
            <div className="icons">
                 {props.icon}
            </div>
           <div className="mobile">
                {props.mobile}
           </div>
           <div className="time">
                {props.time}
           </div>
        </div>
    </div>
  )
}
