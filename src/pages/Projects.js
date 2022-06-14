import React from 'react'
import Wrapper from '../assets/wrappers/Projects'
import { ProjectCard } from '../components'
import prt from '../assets/images/prt.png'
import mobile from '../assets/images/mobile.png'
import projects from '../projects'
import { FiGithub } from 'react-icons/fi'
import { MdOpenInNew } from 'react-icons/md'

const Projects = () => {
  return (
    <Wrapper id='projects'>
      <h3>Projects</h3>
      <div className='featured-project'>
        <div className='box'>
          <img src={prt} alt='app screenshot' />
        </div>
        <div className='box body'>
          <div className='header'>
            <p className='text-md project-title'>PROPERTY RENTALS TRACKER <span className='badge text-sm'>MERN</span></p>
          </div>
          <p>An full stack app for a team of leasing agents to help keep track of assigned rentals and action items associated with each rental while in the leasing stage.</p>
          <div className='project-links'>
            {/* <a href='https://github.com/nvsco-10' target="_blank" rel="noopener noreferrer"><FiGithub/></a> */}
            <a href='https://property-rentals-tracker.herokuapp.com/' target="_blank" rel="noopener noreferrer"><MdOpenInNew/></a>
          </div>
        </div>
      </div>
      <div className='featured-project'>
       <div className='box body'>
          <p>Main technologies used:</p>
          <div className='technologies'>
            <ul>
              <li>React</li>
              <li>Axios</li>
              <li>styled-components</li>
              <li>Material UI (tables)</li>
              <li>Node</li>
            </ul>
            <ul>
              <li>Express</li>
              <li>Mongoose</li>
              <li>JWT</li>
              <li>Git</li>
              <li>Heroku</li>
            </ul>
        </div>
        </div>
        <div className='box'>
          <img className='mobile' src={mobile} alt='app screenshot' />
        </div>
      </div>
      <div className='other-projects'>
        <h5>Other projects</h5>
        <div className='other-projects'>
        {projects.map((project, index) => {
          return (
            <ProjectCard 
              key={index} 
              index={index}
              title={project.title} 
              description={project.description}
              badge={project.badge}
              github={project.github}
              live={project.live}
            />
          )
        })}
        </div>
      </div>
    </Wrapper>
  )
}

export default Projects