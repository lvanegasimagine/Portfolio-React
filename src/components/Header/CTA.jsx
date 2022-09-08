import React from 'react'
import CV from '../../assets/cv.pdf';
import { BsWhatsapp } from "react-icons/bs";
import { SiDocusign } from "react-icons/si";
const CTA = () => {
  return (
    <div className="cta">
        <a style={{fontSize: '20px'}} href={CV} download className='btn btn-download'><SiDocusign/> Descargar CV</a>
        <a style={{fontSize: '20px'}} href="#contact" className='btn btn-whastapp'><BsWhatsapp style={{marginTop: 1}} /> Contactame</a>
    </div>
  )
}

export default CTA