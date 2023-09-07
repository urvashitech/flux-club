import React from 'react'
import './Home.css'
import MyImage from '../robo.jpg'
export default function Home() {
  return (
    <div>
      <section id = 'Home'>
        <div className='leftSection'>
          <img className="MyImage" src={MyImage} alt="Description of the image"/>
        </div>
        <div className='rightSection'>
          <div className='textContainer'>
            <h1 className='heading'>A Robotics Club Dreaming High,</h1>
            <div className='para_1'>passionate Working on impossible-seeming works.</div>
            <div className='para_2'>Start scrolling and get to know more about us.</div>
            <span id="element"></span>
          </div>
        </div>
      </section>
    </div>
  )
}
