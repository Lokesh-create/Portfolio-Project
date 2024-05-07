import React from 'react'
import './Home.css';
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Home() {
  return (
    <>
     
      <div style={{ paddingTop: '0'}} className='home'>
          <div className="container">
            <div className="text">
                <h2>Photographer <br />& Film Maker</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Praesentium facere voluptate earum alias perferendis, minus qui molestias sunt neque quae.
                 </p>   
                 <button >Learn More</button>
              <div className="social-tags">
                  <a href='#'><FaLinkedinIn /></a>
                  <a href='#'><FaTwitter/></a>
                  <a href='#'><FaInstagram/></a>
              </div>
            </div>
              <div className="img">
                <img src="main_img.png" className='profile'/>
              </div>
          </div>  
      </div>
       
    </>
  )
}
 