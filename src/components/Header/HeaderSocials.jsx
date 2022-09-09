import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="www.linkedin.com/in/luis-valentin-vanegas-morales" target='_blank' title='Linkedin'><BsLinkedin/></a>
        <a href="https://github.com/lvanegasimagine" target='_blank' title='GitHub'><FaGithub/></a>
        <a href="https://dribbble.com" target='_blank' title='Dribbble'><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials