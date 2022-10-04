import Wrapper from '../assets/wrappers/OtherProjectCard'
import { FiGithub } from 'react-icons/fi'
import { MdOpenInNew } from 'react-icons/md'

const OtherProjectCard = ({ index, title, badge, github, live, img }) => {
  return (
    <Wrapper>
      <div className={`header box${index}`}>
        <div className={`header-overview box${index}`}>
          <img src={img} alt={title} />
        </div>
      </div>
      <div className='body'>
        <div className='project-overview'>
          <span className='badge text-sm'>
            {badge}
          </span>
          <div className='project-links'>
            <a href={github} target="_blank" rel="noopener noreferrer"><FiGithub/></a>
            <a href={live} target="_blank" rel="noopener noreferrer"><MdOpenInNew/></a>
          </div>
        </div>
        
      </div>
    </Wrapper>
  )
}

export default OtherProjectCard
