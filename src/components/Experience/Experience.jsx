import React from "react";
import "./experience.css";
import { IoLogoHtml5, IoLogoJavascript, IoLogoCss3,  IoLogoNodejs} from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { FaBootstrap, FaGitAlt } from "react-icons/fa";
import { SiMysql, SiMongodb, SiAngular, SiMicrosoftsqlserver, SiFirebase } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Mi Experiencia</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desarrollo Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoLogoHtml5 className="experience__details-icon" />
              <div className="">
                <h4>HTML</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <div className="">
                <h4>CSS</h4>
                <small className="text-light">Basico</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <div className="">
                <h4>Javascript</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap className="experience__details-icon" />
              <div className="">
                <h4>Bootstrap</h4>
                <small className="text-light">Basico</small>
              </div>
            </article>
            <article className="experience__details">
              <RiReactjsLine className="experience__details-icon" />
              <div className="">
                <h4>React</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <SiAngular className="experience__details-icon" />
              <div className="">
                <h4>Angular</h4>
                <small className="text-light">Basico</small>
              </div>
            </article>
          </div>
        </div>

        {/* TODO: Backend */}

        <div className="experience__backend">
          <h3>Desarrollo Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoLogoNodejs className="experience__details-icon" />
              <div className="">
                <h4>Node js</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div className="">
                <h4>MongoDB</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <SiFirebase className="experience__details-icon" />
              <div className="">
                <h4>Firebase</h4>
                <small className="text-light">Basico</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMysql className="experience__details-icon" />
              <div className="">
                <h4>MySQL</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMicrosoftsqlserver className="experience__details-icon" />
              <div className="">
                <h4>Sql Server</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <FaGitAlt className="experience__details-icon" />
              <div className="">
                <h4>Git</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
