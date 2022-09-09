import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      {/* <a href="#" className='footer__logo'>Luis Vanegas</a> */}

      <ul className='permalinks'>
        <li><a href="#">Inicio</a> </li>
        <li><a href="#about">Acerca de Mi</a> </li>
        <li><a href="#experience">Experiencia</a> </li>
        <li><a href="#portfolio">Portafolio</a> </li>
        <li><a href="#contact">Contacto</a> </li>
      </ul>
      <div className="footer__socials">
        <a target='_blank' href="https://www.facebook.com/luis.vanegas.3762/"><FaFacebookF/></a>
        <a target='_blank' href="https://www.instagram.com/lui_vanegas95/"><FiInstagram/></a>
        <a target='_blank' href="https://api.whatsapp.com/send/?phone=50582999448&text&type=phone_number&app_absent=0"><BsWhatsapp /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Luis Vanegas Todos los derechos reservados</small>
      </div>
    </footer>
  )
}

export default Footer