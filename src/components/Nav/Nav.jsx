import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import './nav.css';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')} title="inicio"><AiOutlineHome/></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')} title="Acerca de Mi" ><AiOutlineUser/></a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')} title="Experiencia" ><BiBook/></a>
      {/* <a href="#services" className={activeNav === '#services' ? 'active' : ''} onClick={() => setActiveNav('#services')} >< RiServiceLine/></a> */}
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')} title="contacto"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav