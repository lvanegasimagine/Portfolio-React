import React from "react";
import "./about.css";
import Me from "../../assets/me-about3.jpg";
import { FaAward } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";

const data_about = [
  {
    icon: <FaAward className="about__icon" />,
    title: "Experiencia",
    duration: 3,
  },
  {
    icon: <MdDesignServices className="about__icon" />,
    title: "Diseño",
    duration: 3,
  },
  {
    icon: <VscFolderLibrary className="about__icon" />,
    title: "Proyectos",
    duration: 3,
  },
];

const About = () => {
  return (
    <section id="about">
      <h2>Acerca De Mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {data_about.map((item, index) => (
              <article key={index} className="about__card">
                {item.icon}
                <h5>{item.title}</h5>
                <small>{item.duration}+ Año</small>
              </article>
            ))}
          </div>
          <p>
            Soy un entusiasta programador autodidacta con experiencia en las
            actuales tecnologias, a lo largo de todo mi proceso de aprendizaje
            he mejorado y optimizado mis conocimientos para seguir progresando
            en este maravilloso mundo 😉.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
