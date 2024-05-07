import React from 'react'
import './Portfolio.css';

export default function Portfolio() 
{
  
  return (
    <>
        <div style={{paddingTop:"0px"}}>
          <div className="Portfolio-container">
          <div className="portfolio-text">
              <h2>Portfolio</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores soluta ullam atque corporis et aperiam minima maxime facere, 
                cumque distinctio provident laboriosam quis omnis odio illo! Doloribus, tempora molestias?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus assumenda praesentium delectus rem officia impedit temporibus cupiditate? Error exercitationem 
                  quos ullam quisquam saepe dolor reprehenderit aperiam explicabo, aspernatur repellat impedit?</p>
            </div>
                 <div className="image-container" >
                  <img src="boat.jpg" className='boat'/>
                  <img src="horse.jpg" className='horse'/>
                  <img src="orange_trees.jpg" className='orange'/>
                  <img src="tiger.jpg" className='tiger'/> 
                  <img src="Waterfall.jpg" className="waterfall" />
                  <img src="white_mountains.jpg" className='mountain' /> 
                </div>  

    
          </div>
      </div>
    </>
  )
}
