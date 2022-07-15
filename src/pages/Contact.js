import React from 'react'
import Wrapper from '../assets/wrappers/Contact'
import { FiMail } from 'react-icons/fi'

const Contact = () => {
  return (
    <Wrapper id='contact'>
      <h3>Contact</h3>
      <div>
        <a href="mailto:neemavelasco@gmail.com">
          <FiMail className='icon'/>
        </a>
        <a className="email" href="mailto:neemavelasco@gmail.com">
          neemavelasco@gmail.com
        </a>
      </div>
    </Wrapper>
  )
}

export default Contact