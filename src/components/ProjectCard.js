import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { MdOpenInNew } from 'react-icons/md'

const ProjectCard = ({ index, title, description, badge, github, live}) => {
  return (
    <div className='project'>
      <div className={`image-box box${index}`}>
        <div>
          <p className='text-md project-title'>{title} <span className='badge text-sm'>{badge}</span></p>
        </div>
      </div>
      <div className='body'>
        <p>{description}</p>
        <div className='project-links'>
          <a href={github} target="_blank" rel="noopener noreferrer"><FiGithub/></a>
          <a href={live} target="_blank" rel="noopener noreferrer"><MdOpenInNew/></a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard