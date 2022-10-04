import Wrapper from '../assets/wrappers/ProjectCard'
import { FiGithub } from 'react-icons/fi'
import { MdOpenInNew } from 'react-icons/md'

const ProjectCard = ({ index, title, description, badge, github, live, img }) => {
  return (
    <Wrapper>
      <div className={`header box${index}`}>
        <div className={`header-overview box${index}`}>
          <img src={img} alt={title} />
        </div>
      </div>
      <div className='body'>
        <p className='text-md project-title'>
          {title} 
          <span className='badge text-sm'>
            {badge}
          </span>
        </p>
        <p>{description}</p>
        <div className='project-links'>
          <a href={github} target="_blank" rel="noopener noreferrer"><FiGithub/></a>
          <a href={live} target="_blank" rel="noopener noreferrer"><MdOpenInNew/></a>
        </div>
      </div>
    </Wrapper>
  )
}

export default ProjectCard
