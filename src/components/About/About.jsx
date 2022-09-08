import React from "react";
import "./about.css";
import Me from "../../assets/me-about3.jpg";
import { FaAward } from 'react-icons/fa'
import { MdDesignServices } from 'react-icons/md'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h2>Sobre Mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experiencia</h5>
              <small>3+ Año</small>
            </article>

            <article className="about__card">
              <MdDesignServices className="about__icon"/>
              <h5>Diseño</h5>
              <small>15+ Completados</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Proyectos</h5>
              <small>10+ Completados</small>
            </article>
          </div>
          <p>
              Soy un entusiasta programador autodidacta con experiencia en las actuales tecnologias, a lo largo de todo mi proceso de aprendizaje he mejorado y optimizado mis conocimientos para seguir progresando en este maravilloso mundo 😉.
          </p>
          <a href="#contact" className="btn btn-primary" style={{fontSize: "20px", fontWeight: "bold", borderRadius: "5px 20px"}}>Hablemos</a>
        </div>
      </div>
    </section>
  );
};

export default About;
