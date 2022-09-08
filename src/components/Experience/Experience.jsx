import React from "react";
import "./experience.css";
import {
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoNodejs,
} from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { FaBootstrap, FaGitAlt } from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiAngular,
  SiMicrosoftsqlserver,
  SiFirebase,
} from "react-icons/si";

const data_frontend = [
  {
    icon: <IoLogoHtml5 className="experience__details-icon" />,
    name: "HTML",
    level: "Intermedio",
  },
  {
    icon: <IoLogoCss3 className="experience__details-icon" />,
    name: "CSS",
    level: "Basico",
  },
  {
    icon: <IoLogoJavascript className="experience__details-icon" />,
    name: "Javascript",
    level: "Intermedio",
  },
  {
    icon: <FaBootstrap className="experience__details-icon" />,
    name: "Bootstrap",
    level: "Basico",
  },
  {
    icon: <RiReactjsLine className="experience__details-icon" />,
    name: "React",
    level: "Intermedio",
  },
  {
    icon: <SiAngular className="experience__details-icon" />,
    name: "Angular",
    level: "Basico",
  },
];

const data_backend = [
  {
    icon: <IoLogoNodejs className="experience__details-icon" />,
    name: "Node Js",
    level: "Intermedio",
  },
  {
    icon: <SiMongodb className="experience__details-icon" />,
    name: "MongoDB",
    level: "Basico",
  },
  {
    icon: <SiFirebase className="experience__details-icon" />,
    name: "Firebase",
    level: "Basico",
  },
  {
    icon: <SiMysql className="experience__details-icon" />,
    name: "MySQL",
    level: "Intermedio",
  },
  {
    icon: <SiMicrosoftsqlserver className="experience__details-icon" />,
    name: "Sql Server",
    level: "Intermedio",
  },
  {
    icon: <FaGitAlt className="experience__details-icon" />,
    name: "Git",
    level: "Intermedio",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h2>Mi Experiencia</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desarrollo Frontend</h3>
          <div className="experience__content">
            {data_frontend.map((item, index) => (
              <article className="experience__details" key={index}>
                {item.icon}
                <div>
                  <h4>{item.name}</h4>
                  <small className="text-light">{item.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Desarrollo Backend</h3>
          <div className="experience__content">
            {data_backend.map((item, index) => (
              <article className="experience__details" key={index}>
                {item.icon}
                <div className="">
                  <h4>{item.name}</h4>
                  <small className="text-light">{item.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
