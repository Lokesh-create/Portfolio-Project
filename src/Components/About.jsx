import React from 'react'
import './About.css';
import AboutCard from './AboutCard';
export default function About() 
{
  return (
    <div style={{paddingTop: '14px'}} className ='About'>
      <section className ='first_section'>
        <img src="second_img.png" className ='img'/>
        <div className ="text">
              <h3>About Me</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequuntur iure suscipit voluptatibus 
              blanditiis quibusdam nulla praesentium error, velit explicabo.</p>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sapiente
                 quae rem delectus natus adipisci pariatur aliquam quibusdam voluptate reiciendis!</p>
        </div>
      </section>
       
       <section className='second-section'>
               
              <h3>What My Clients Says</h3>
              <p>Lorem ipsum dolor sit amet., consectetur adipiscing elit.</p>
       </section>
       
       <section className='card-section'>
       <AboutCard name="John Deo" feedback="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis rem illo praesentium 
          unde natus Est impedit illum suscipit nam ipsum" image="John.jpg"/>

          <AboutCard name="Jenna Smith" feedback="  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Iure sunt dolor culpa quidem enim at minus minima excepturi rem dolorum!" image="Jenna.jpg" />

          <AboutCard name="Samuel Stevens" feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nemo neque nesciunt corporis quasi atque, sunt ducimus,
          voluptas aliqua" image="Sam.jpg"/> 

       </section>

         
    </div>
  )
}
