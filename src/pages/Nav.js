import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/Nav'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiMenuAlt1 } from 'react-icons/hi'
import logo from '../assets/images/logo.png'
import resume from '../assets/Neema-Velasco-Resume.pdf'

const Nav = () => {
  const [ showMenu, setShowMenu ] = useState(false)

  
  return (
    <Wrapper>
      <HiMenuAlt1 className='toggle' onClick={() => setShowMenu(!showMenu)} />
      <div className={showMenu ? 'container show-container' : 'container'}>
        <div className='nav-section'>
          <a href='#about'className='logo'><img src={logo} alt='logo' height='30px'/></a>
          <a href='#about' className='about'>About</a>
        </div>
        <div className='nav-section page-links'>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
          <a className='resume' href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
        <div className='nav-section social-links'>
          <a href='https://github.com/nvsco-10' target="_blank" rel="noopener noreferrer" className='icon'><BsGithub/></a>
          <a href='https://www.linkedin.com/in/neemavelasco/' target="_blank" rel="noopener noreferrer" className='icon'><BsLinkedin/></a>
        </div>
      </div>
    </Wrapper>
  )
}

export default Nav