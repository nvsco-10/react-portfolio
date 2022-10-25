import React from 'react'
import Wrapper from '../assets/wrappers/About'
import logo from '../assets/images/profile.png'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const About = () => {
  return (
    <Wrapper id='about'>
      <div className='card'>
        <div className='image'>
          <img className='profile' src={logo} alt='profile'/>
        </div>
        <div className='intro'>
          <h2>Neema Velasco</h2>
          <div className='job-title'>
            <p className='title'>Full Stack Web Developer</p>
            <div className='job-status'>
              <AiOutlineCheckCircle className='icon'/>
              <span className='text-xxs'>open to work</span>
            </div>
          </div>
        </div>
        
        <div className='skills'>
          <ul>
            <li>HTML / CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Vue</li>
          </ul>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>

      <div className='bio'>
        <p>Howdy!</p>
        <p>I'm a Web Developer based in North Texas.</p>
        <p>I like to show my creativity and passion in everything I build.
        </p>
      </div>
      
    </Wrapper>
  )
}

export default About