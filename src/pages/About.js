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
            <p className='title'>Software Developer</p>
            <div className='job-status'>
              <AiOutlineCheckCircle className='icon'/>
              <span className='text-xxs'>open to work</span>
            </div>
          </div>
        </div>
        
        <div className='skills'>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Handlebars</li>
            <li>jQuery</li>
          </ul>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>Mongoose</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>

      <div className='bio'>
        <p>Howdy!</p>
        <p>I'm a Software Developer based in North Texas.</p>
        <p>A fascination towards blockchain technologies and cryptocurrencies sparked my initial interest in web development.
        </p>
        <p>What I find most exciting about being a developer is being able to solve business problems through technology and being part of the constantly evolving nature of the tech industry.
        </p>
      </div>
      
    </Wrapper>
  )
}

export default About