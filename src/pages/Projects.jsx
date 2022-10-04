import React from 'react'
import Wrapper from '../assets/wrappers/Projects'
import { ProjectCard, OtherProjectCard } from '../components'
import projects from '../projects'
import otherprojects from '../otherprojects'

const Projects = () => {
  return (
    <Wrapper id='projects'>
      <h3>Projects</h3>
      <div className='projects-container'>
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
            img={project.img}
          />
        )
      })}
      </div>
      <div className='spacer'></div>
      <div className='other-projects'>
        <h5>Other Small Projects</h5>
        <div className='other-projects-container'>
        {otherprojects.map((project, index) => {
        return (
          <OtherProjectCard 
            key={index} 
            index={index}
            title={project.title} 
            badge={project.badge}
            github={project.github}
            live={project.live}
            img={project.img}
          />
        )
      })}
        </div>
      </div>
      <div className='spacer'></div>
    </Wrapper>
  )
}

export default Projects