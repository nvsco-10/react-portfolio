import React from 'react'
import Wrapper from '../assets/wrappers/Contact'
import { FiMail } from 'react-icons/fi'

const Contact = () => {
  return (
    <Wrapper id='contact'>
      <h3>Work with me?</h3>
      <div>
        <a href="mailto:neemavelasco@gmail.com">
        <FiMail className='icon'/>
        </a>
      </div>
    </Wrapper>
  )
}

export default Contact