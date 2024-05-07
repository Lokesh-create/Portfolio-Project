import React, { useState, useCallback } from 'react';
import './Contact.css';
import ContactCard from './ContactCard.jsx';
import { FaMobileAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrDomain } from "react-icons/gr";

export default function Contact() {
  const [user, setUser] = useState({
    username: "",
    email: "",
  });
  const [error, setError] = useState({});
 
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const newError = {};
   
  function handleSubmit(e) {
    e.preventDefault();
    let name = user.username.replaceAll(" ", "");

    if (name === "") 
    {
      newError.username = "Please Enter Name"
    }  
    else if(!(name.length>=2 && name.length<=15))
    {
         newError.username="Name must be b/w 2 to 10 characters";
    }
    else if (!/^[a-zA-Z\s]*$/.test(name)) 
    {
        newError.username = "Name should only contain letters and spaces";
    }
    

    if(user.email ==="")
    {
      newError.email="Please enter Email";
    }
    else if ((user.email.length>=2) && (user.email.length<=15))
    {
        newError.email = "Emial must be between under 2 to 15 characters";
    }
    else if ((user.email.charAt(user.email.length-4)!=".") && (user.email.charAt(user.email.length -3) !="." ) )
    {
        newError.email = " '.' invalid position"
    }
    else if (user.email.indexOf("@") === -1 || user.email.indexOf("@") !== user.email.lastIndexOf("@"))
    {
      newError.email = "Email must contain exactly one '@' symbol";
    }
    else if (!user.email.endsWith("@gmail.com")) 
    {
      newError.email = "Email must end with '@gmail.com'";
    }

    setError(newError);
  }
  

  return (
    <div style={{ paddingTop: '10px' }}>
      <div className="Contact-container">
        <h2>Contact</h2>
        <div className="card-container">
          <ContactCard icon={<FaMobileAlt />} mobile="+1 2222 54748 7" time="Monday - Friday from 7am - 5pm" />
          <ContactCard icon={<FaLocationDot />} mobile="London, United Kingdom" time="Rosemaed, UK 91117" />
          <ContactCard icon={<GrDomain />} mobile="contact@domain.com" time="Contact me every time!" />
        </div>

        <div className="form-message">
          <div className="form-container">
            <h3>Get In Touch</h3>
            <form onSubmit={handleSubmit}>

              <input
                type='text'
                placeholder='Enter Name'
                onChange={handleInput}
                name='username' /><br />
               <span className={error.username ? 'error-message' : 'hidden'}>{error.username}</span> 

              <input
                type='text'
                placeholder='Enter email address'
                name='email' 
                onChange={handleInput}/><br />
              <span className={error.email ? 'error-message' : 'hidden'}>{error.email}</span>

              <textarea cols="50" rows="5" placeholder='Enter Your message'></textarea>
              <button className='send-btn' type='submit'>Send Message</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}
